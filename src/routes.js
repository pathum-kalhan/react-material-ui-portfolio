import { lazy } from "react";

const ProjectsList = lazy(() => import("./screens/Projects"));


export const routes = [
  {
    name: "TODO",
    children: [
      {
        name: "Todo List",
        path: "/projects",
        component: ProjectsList,
      },
    ],
  },
];
