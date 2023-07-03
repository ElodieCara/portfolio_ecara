import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error-page";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkPage from "./pages/Work-page";

const ScrollToTop = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return <div ref={scrollRef} />;
};

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
        <WorkPage />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        element: (
          <>
            <ScrollToTop />
            <WorkPage />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
