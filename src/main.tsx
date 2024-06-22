import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/context";
import CartProvider from "@/context/Cart/CartProvider";
import "@/assets/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { publicRouter } from "@/router/publicRouter";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={publicRouter} />
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
