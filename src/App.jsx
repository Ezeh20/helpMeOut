import { Routes, Route } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import Auth from "./pages/auth/Auth"
import Dashboard from "./pages/dashboard/Dashboard"
import Single from "./pages/single/Single"
import Video from "./pages/video/Video"


const App = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="login" element={<Auth />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="video/:id" element={<Video />} />
      <Route path="dashboard/:id" element={<Single />} />
    </Routes>
  )
}

export default App