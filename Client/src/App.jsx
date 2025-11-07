import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import InternshipList from "./Pages/InternshipList";
import InternshipDetails from "./Pages/InternshipDetails";
import InternshipApply from "./Pages/InternshipApplication";
import InternshipScheduling from "./Pages/InternshipScheduling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/internships" element={<InternshipList />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />
        <Route path="/apply/:id" element={<InternshipApply />} />
        <Route
          path="/internshipscheduling"
          element={<InternshipScheduling />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
