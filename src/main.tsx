import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/context";
import CartProvider from "@/context/Cart/CartProvider";
import "@/assets/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { publicRouter } from "@/router/publicRouter";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <CartProvider>
            <RouterProvider router={publicRouter} />
          </CartProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
