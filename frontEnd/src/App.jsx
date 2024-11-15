import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Inventory from "./components/Inventory";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "inventory",
          element: <Inventory />,
        },
        {

        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
