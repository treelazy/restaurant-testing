export default (query) => ({
  restaurantName: query?.restaurantName || "",
  comment: query?.comment || "",
  rating: query?.rating || 1,
});
