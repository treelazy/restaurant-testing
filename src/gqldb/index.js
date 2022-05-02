import { gql } from "@apollo/client";

export const GET_RESTAURANT_LISTS = gql`
  query GetRestaurantLists(
    $rating: String
    $creatAt: String
    $restaurantName: String
  ) {
    getRestaurantLists(
      rating: $rating
      creatAt: $creatAt
      restaurantName: $restaurantName
    ) {
      id
      restaurantName
      comment
      rating
      creatAt
      updateAt
    }
  }
`;

export const GET_RESTAURANT_LIST_INFO = gql`
  query GetRestaurantListsInfo($id: String!) {
    getRestaurantListInfo(id: $id) {
      id
      restaurantName
      comment
      rating
      creatAt
      updateAt
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation AddComment(
    $restaurantName: String!
    $comment: String!
    $rating: Int!
  ) {
    addComment(
      restaurantName: $restaurantName
      comment: $comment
      rating: $rating
    ) {
      id
      restaurantName
      comment
      rating
      creatAt
      updateAt
    }
  }
`;

export const UPDATE_RESTAURANT = gql`
  mutation UpdateComment(
    $restaurantName: String!
    $comment: String!
    $rating: Int!
    $id: String!
  ) {
    updateComment(
      restaurantName: $restaurantName
      comment: $comment
      rating: $rating
      id: $id
    ) {
      id
      restaurantName
      comment
      rating
      creatAt
      updateAt
    }
  }
`;

export const DELETE_RESTAURANT = gql`
  mutation DeleteRestaurant($id: String!) {
    deleteComment(id: $id) {
      id
      restaurantName
      comment
      rating
      creatAt
      updateAt
    }
  }
`;
