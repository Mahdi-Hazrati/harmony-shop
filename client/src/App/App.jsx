import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './App.css';

const routersArray = createBrowserRouter([
  {
    path:"/",
    element: <div>Home</div>
  },
  {
    path:"/products/:id",
    element: <div>Category</div>
  },
  {
    path:"/product/:id",
    element: <div>Product</div>
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
