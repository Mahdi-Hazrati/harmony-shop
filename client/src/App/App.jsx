import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"
import Dashboard from "../pages/Dashboard/Dashboard"
import Layout from "./Layout"

import './App.css';

const routersArray = createBrowserRouter([
  {
    path: "/",
    element: <Layout className="app" />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      }

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={routersArray} />
    </div>
  );
}

export default App;
