import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import Trial from "./pages/trial"
import Register from "./pages/register/index"
function App() {

  return (
    <div className="">
      <main>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
