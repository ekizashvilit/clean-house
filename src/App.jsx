import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CustomerLayout from "./layouts/customerLayout/CustomerLayout";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
