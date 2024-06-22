import { createBrowserRouter } from "react-router-dom";
import { AboutPage, CatalogPage, HomePage, ErrorPage } from "@/views";
import PublicLayout from "@/layout/PublicLayout/PublicLayout";
import ProductDetailPage from "@/views/ProductDetailPage/ProductDetailPage";
import { RouteVariable } from "@/router/constants";
export const publicRouter = createBrowserRouter([
  {
    path: RouteVariable.home,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouteVariable.catalog,
        element: <CatalogPage />,
      },
      {
        path: RouteVariable.productItem,
        element: <ProductDetailPage />,
        loader: () => {
          return { name: "name" };
        },
      },
      {
        path: RouteVariable.about,
        element: <AboutPage />,
      },
    ],
  },
]);
