import List from "../components/List";
import Edit from "../components/Edit";

export const indexRouter = [
  {
    path: "/",
    component: List,
  },
  {
    path: "/edit/:id",
    component: Edit,
  },
  {
    path: "/new",
    component: Edit,
  },
];

