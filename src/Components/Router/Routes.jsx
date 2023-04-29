import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category";
import NewsLayOuts from "../../Layout/NewsLayOuts";
import News from "../Pages/Home/News/News";
import LoginLayout from "../LoginLayout/LoginLayout";
import Login from "../LoginLayout/Login";
import Register from "../LoginLayout/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Terms from "../Terms/Terms";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "category",
    element: <MainLayout />,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayOuts></NewsLayOuts>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "register",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
