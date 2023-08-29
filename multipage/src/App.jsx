import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
