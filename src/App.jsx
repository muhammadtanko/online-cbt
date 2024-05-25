import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register/index"
function App() {

  return (
    <div className="">
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
