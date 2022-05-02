const { gql } = require("apollo-server");

const typeDefs = gql`
  type RestaurantList {
    id: String
    restaurantName: String
    comment: String
    rating: Int
    creatAt: String
    updateAt: String
  }

  type Query {
    getRestaurantLists(
      rating: String
      creatAt: String
      restaurantName: String
    ): [RestaurantList!]!
    getRestaurantListInfo(id: String!): [RestaurantList]
  }

  type Mutation {
    addComment(
      restaurantName: String!
      comment: String!
      rating: Int!
    ): RestaurantList
    updateComment(
      id: String!
      restaurantName: String!
      comment: String!
      rating: Int!
    ): RestaurantList
    deleteComment(id: String!): [RestaurantList]
  }
`;

module.exports = typeDefs;
