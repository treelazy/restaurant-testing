import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
  TableWrapper,
  ButtonWrapper,
  LoadingWrapper,
  LoadingContent,
} from "../utils/StyledItem";
import { DELETE_RESTAURANT } from "../../gqldb";

const Table = ({
  restaurantList,
  loading,
  handleTableClick,
  refetch,
}) => {
  const navigate = useNavigate();
  const [deleteRestaurant] = useMutation(DELETE_RESTAURANT);
  const [sort, setSort] = useState({ rating: false, creatAt: false });
  if (loading) {
    return (
      <LoadingWrapper>
        <LoadingContent />
      </LoadingWrapper>
    );
  }
  if (restaurantList.length === 0) {
    return <TableWrapper>empty, please add data</TableWrapper>;
  }
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th style={{ minWidth: "150px" }}>Action</th>
            <th>RestaurantName</th>
            <th
              style={{ minWidth: "50px" }}
              onClick={() => {
                setSort((prev) => ({ ...prev, rating: !prev.rating }));
                handleTableClick({
                  rating: sort.rating ? "desc" : "asc",
                  creatAt: "",
                });
              }}
            >
              Rating
            </th>
            <th style={{ minWidth: "300px" }}>Comment</th>
            <th
              style={{ minWidth: "90px" }}
              onClick={() => {
                setSort((prev) => ({ ...prev, creatAt: !prev.creatAt }));
                handleTableClick({
                  creatAt: sort.creatAt ? "desc" : "asc",
                  rating: "",
                });
              }}
            >
              CreatAt
            </th>
          </tr>
        </thead>
        <tbody>
          {restaurantList.map((item) => (
            <tr key={item.id}>
              <td>
                <ButtonWrapper onClick={() => navigate(`/edit/${item.id}`)}>
                  edit
                </ButtonWrapper>
                <ButtonWrapper
                  onClick={() => {
                    deleteRestaurant({ variables: { id: item.id } });
                    refetch();
                  }}
                >
                  delete
                </ButtonWrapper>
              </td>
              <td>{item.restaurantName}</td>
              <td>{item.rating}</td>
              <td>{item.comment}</td>
              <td>{item.creatAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
