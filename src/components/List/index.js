import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_RESTAURANT_LISTS } from "../../gqldb";
import { ListWrapper, SearchWrapper, ButtonWrapper } from "../utils/StyledItem";
import Table from "./Table";

const List = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [getList, { loading, data, refetch }] = useLazyQuery(
    GET_RESTAURANT_LISTS,
    { fetchPolicy: "network-first" }
  );

  const navigate = useNavigate();
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (data?.getRestaurantLists?.length >= 0) {
      setRestaurantList(data?.getRestaurantLists || []);
    }
  }, [data]);

  const handleTableClick = (value) => {
    getList({ variables: { ...value } });
    refetch();
  };

  return (
    <ListWrapper>
      <SearchWrapper>
        <div>
          <input
            placeholder="Search RestaurantName"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginRight: "10px", height: "30px", width: "150px" }}
          />
          <ButtonWrapper
            type="button"
            onClick={() =>
              getList({ variables: { restaurantName: searchQuery } })
            }
          >
            search
          </ButtonWrapper>
        </div>
        <ButtonWrapper type="button" onClick={() => navigate("/new")}>
          add Review
        </ButtonWrapper>
      </SearchWrapper>
      <Table
        loading={loading}
        restaurantList={restaurantList}
        handleTableClick={handleTableClick}
        refetch={refetch}
      />
    </ListWrapper>
  );
};

export default List;
