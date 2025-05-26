import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";
import Flows from "./pages/Flows";
import StartFlow from "./pages/StartFlow";
import Register from "./pages/Register";

function App() {
  const token = false;
  return (
    <>
      <Routes>
        {token && (
          <>
            <Route element={<Dashboard/>}>
              <Route path="/" element={<Home />} />
              <Route path="/flows" element={<Flows />} />
              <Route path="/flows/start" element={<StartFlow />} />
            </Route>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
          </>
        )}
        {!token && (
          <>
            <Route path="/" element={<Navigate to="/login"/> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login"/> } />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;