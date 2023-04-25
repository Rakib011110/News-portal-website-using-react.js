import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category";
import NewsLayOuts from "../../Layout/NewsLayOuts";
import News from "../Pages/Home/News/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      // {
      //   path: "/news/:id",
      //   element: <></>,
      // },
    ],
  },

  {
    path: "/news",
    element: <NewsLayOuts />,
    children: [
      {
        path: ":id",
        element: <News />,
      },
    ],
  },
]);

export default router;
