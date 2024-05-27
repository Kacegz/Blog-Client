import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import List from "./List";
import Post from "./Post";
import Register from "./Register";
import Login from "./Login";

const Router = () => {
  const Provider = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <List /> },
        {
          path: "/:id",
          element: <Post />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Provider} />;
};
export default Router;
