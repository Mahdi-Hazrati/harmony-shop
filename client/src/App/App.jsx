import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"

import './App.css';

const routersArray = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/products/:id",
    element: <Products />
  },
  {
    path:"/product/:id",
    element: <Product />
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
