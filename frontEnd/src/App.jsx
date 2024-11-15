import React, {useState} from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./Auth.jsx";
import Inventory from "./components/Inventory.jsx";

function NavigationButtons() {
  return (
    <div>
      <button onClick={() => navigate("/inventory")}>Inventory</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
       <NavigationButtons />
      <Router>

      </Router>
        
    </Routes>
  )
}

export default App
