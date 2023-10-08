import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout, Home, Weather } from "../views";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="weather" element={<Weather />} />
    </Route>
  )
);

function MyRoutes() {
  return <RouterProvider router={router} />;
}

export default MyRoutes;
