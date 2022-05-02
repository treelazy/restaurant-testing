import React, { useEffect } from "react";
import { Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useLazyQuery } from "@apollo/client";
import {
  ListWrapper,
  HeaderWrapper,
  ContentWrapper,
  ButtonContainer,
  ButtonWrapper,
} from "../utils/StyledItem";
import {
  ADD_RESTAURANT,
  GET_RESTAURANT_LIST_INFO,
  UPDATE_RESTAURANT,
  GET_RESTAURANT_LISTS,
} from "../../gqldb";
import initValue from "./utils/initValue";
import validationSchema from "./utils/validationSchema";
import FormItemContent from "./FormItem";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [addRestaurant] = useMutation(ADD_RESTAURANT, {
    refetchQueries: [
      {
        query: GET_RESTAURANT_LISTS,
      },
    ],
    onCompleted: () => navigate("/"),
  });
  const [updateRestaurant] = useMutation(UPDATE_RESTAURANT, {
    refetchQueries: [
      {
        query: GET_RESTAURANT_LISTS,
      },
    ],
    onCompleted: () => navigate("/"),
  });

  const [getRestaurantListInfo, { data }] = useLazyQuery(
    GET_RESTAURANT_LIST_INFO,
    {
      variables: {
        id: params.id,
      },
    }
  );
  useEffect(() => {
    if (params.id) {
      getRestaurantListInfo();
    }
  }, []);

  const handleSubmit = (value) => {
    if (params.id) {
      updateRestaurant({ variables: { ...value, id: params.id } });
      return;
    }
    addRestaurant({ variables: { ...value } });
  };

  return (
    <Formik
      initialValues={initValue(data?.getRestaurantListInfo[0])}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue, values, submitForm }) => {
        return (
          <ListWrapper>
            <HeaderWrapper>
              {params.id ? "Edit Review" : "Add Review"}
            </HeaderWrapper>
            <ContentWrapper>
              <FormItemContent label="restaurantName">
                <input
                  value={values.restaurantName}
                  placeholder="請輸入"
                  onChange={(e) =>
                    setFieldValue("restaurantName", e.target.value)
                  }
                />
              </FormItemContent>
              <FormItemContent label="comment">
                <textarea
                  value={values.comment}
                  rows="4"
                  cols="50"
                  name="comment"
                  onChange={(e) => setFieldValue("comment", e.target.value)}
                />
              </FormItemContent>
              <FormItemContent label="rating">
                <select
                  value={values.rating}
                  onChange={(e) =>
                    setFieldValue("rating", Number(e.target.value))
                  }
                >
                  {[...new Array(10).keys()].map((num) => (
                    <option value={num + 1} key={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </FormItemContent>
            </ContentWrapper>
            <ButtonContainer>
              <ButtonWrapper onClick={() => navigate("/")}>取消</ButtonWrapper>
              <ButtonWrapper onClick={submitForm}>確認</ButtonWrapper>
            </ButtonContainer>
          </ListWrapper>
        );
      }}
    </Formik>
  );
};
export default Edit;
