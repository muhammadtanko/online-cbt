import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import Onboarding from "./pages/onboarding"
import Login from "./pages/login"
import Register from "./pages/register/index"
function App() {

  return (
    <div className="">
      <main>

        {/* <SideBar  /> */}
        <Routes>
          <Route path="/" element={<Onboarding />} />
          {/* <Route path="/test" element={<Test />} />
          <Route path="/Final" element={<Final />} />
          <Route path="/trial" element={<Trial />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
