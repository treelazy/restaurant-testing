import * as yup from "yup";

export default yup.object({
  restaurantName: yup.string().required("此欄位必填"),
  comment: yup.string().required("此欄位必填"),
});
