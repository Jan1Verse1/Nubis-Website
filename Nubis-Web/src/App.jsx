import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "../src/Pages/Home";
import NubisGo from "../src/Pages/NubisGo";
import NubisCorp from "../src/Pages/NubisCorp";
import NubisRider from "../src/Pages/NubisRider";
import About from "../src/Pages/AboutUs";
import PrivacyPolicy from "../src/Pages/PrivacyPolicy";
import Terms from "../src/Pages/Terms";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/NubisGo", element: <NubisGo /> },
  { path: "/NubisCorp", element: <NubisCorp /> },
  { path: "/NubisRider", element: <NubisRider /> },
  { path: "/About", element: <About /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/Terms", element: <Terms /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
