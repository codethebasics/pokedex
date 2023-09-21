import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import PokemonList from "./pokemon/PokemonList";
import App from "./App";
import PokemonDetails from "./pokemon/details/PokemonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pokemon",
        element: <PokemonList />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
