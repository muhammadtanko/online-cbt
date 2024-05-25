import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import Exam from "./pages/exam"
import Register from "./pages/register/index"
function App() {

  return (
    <div className="">
      <main>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
