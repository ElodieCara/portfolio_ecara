import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error-page";
import "./styles/prefixed/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import WorkPage from "./pages/Work-page";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/works",
    element: (
      <>
        <ScrollToTop />
        {/* <WorkPage /> */}
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        element: (
          <>
            <ScrollToTop />
            {/* <WorkPage /> */}
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
