const moment = require("moment");
const { uuid } = require("uuidv4");

let restaurantLists = [];

const resolvers = {
  Query: {
    getRestaurantLists(parent, args) {
      let newList = restaurantLists;
      if (!!args.restaurantName) {
        newList = newList.filter((restaurant) =>
          restaurant.restaurantName.includes(args.restaurantName)
        );
      }
      if (args.rating === "desc") {
        newList = newList.sort((a, b) => b.rating - a.rating);
      }
      if (args.rating === "asc") {
        newList = newList.sort((a, b) => a.rating - b.rating);
      }
      if (args.creatAt === "desc") {
        newList = newList.sort(
          (a, b) => new Date(b.creatAt) - new Date(a.creatAt)
        );
      }
      if (args.creatAt === "asc") {
        newList = newList.sort(
          (a, b) => new Date(a.creatAt) - new Date(b.creatAt)
        );
      }
      return newList;
    },
    getRestaurantListInfo(parent, args) {
      return restaurantLists.filter((restaurant) => restaurant.id === args.id);
    },
  },
  Mutation: {
    addComment(parent, args) {
      const restaurant = {
        id: uuid(),
        restaurantName: args.restaurantName,
        rating: args.rating,
        name: args.name,
        nameID: args.nameID,
        comment: args.comment,
        creatAt: moment(new Date()).format("YYYY/MM/DD"),
      };
      restaurantLists.push(restaurant);

      return restaurant;
    },
    updateComment(parent, args) {
      const newList = restaurantLists.find(
        (restaurant) => restaurant.id === args.id
      );

      const restaurantIndex = restaurantLists.findIndex(
        (restaurant) => restaurant.id === args.id
      );
      restaurantLists.splice(restaurantIndex, 1);

      const newRestaurant = {
        ...newList,
        updateAt: moment(new Date()).format("YYYY/MM/DD"),
        restaurantName: args.restaurantName,
        rating: args.rating,
        comment: args.comment,
      };
      restaurantLists.push(newRestaurant);
      return newRestaurant;
    },
    deleteComment(parent, args) {
      const restaurantIndex = restaurantLists.findIndex(
        (restaurant) => restaurant.id === args.id
      );

      if (restaurantIndex === -1) {
        throw new Error("Delete Faile");
      }

      restaurantLists.splice(restaurantIndex, 1);
      return restaurantLists;
    },
  },
};

module.exports = resolvers;
