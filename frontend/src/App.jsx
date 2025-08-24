import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Tasks />} />
        <Route path="/addTask" element={<AddTask />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
