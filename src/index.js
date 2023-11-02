import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtk/app/store";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePages/HomePage";

const router = createBrowserRouter([
  {
 
    path: "/",
    
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true,  element: <HomePage /> },
      { path: "searchpage", element: <SearchPage /> },
      { path: "mylibrary", element: <MyLibraryPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
