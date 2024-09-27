import './pages/pages.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import HomeAuthenticated from "./pages/HomeAuthenticated"

function App(){
  return (
    <div className='formContainer'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/HomeAuthenticated" element={<HomeAuthenticated />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App