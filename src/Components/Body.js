import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";

import Display from "./Display";
import { RouterProvider } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import Error from "./Error";
import Gpt from "./Gpt";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Display />,
    },
    {
      path: "/gpt",
      element: <Gpt/>,
    },

    {
      path: "error",
      element: <Error />,
    },
    {
      path: "/browse/:resId",
      element: <MovieInfo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
