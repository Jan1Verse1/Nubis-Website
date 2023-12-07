import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "../src/Pages/Home";
import NubisGo from "../src/Pages/NubisGo";
import NubisCorp from "../src/Pages/NubisCorp";
import NubisRider from "../src/Pages/NubisRider";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/NubisGo", element: <NubisGo /> },
  { path: "/NubisCorp", element: <NubisCorp /> },
  { path: "/NubisRider", element: <NubisRider /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
