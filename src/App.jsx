import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";
import Flows from "./pages/Flows";
import AddSolutionForm from "./components/Forms/AddSolutionForm";
import StepperForm from "./components/Forms/StepperForm";

function App() {
  const token = true;
  return (
    <>
      <Routes>
        {token && (
          <>
            <Route element={<Dashboard/>}>
              <Route path="/" element={<Home />} />
              <Route path="/flows" element={<Flows />} />
              <Route path="/flows/start" element={<StepperForm />} />
            </Route>
            <Route
              path="/login"
              element={<Navigate to="/" />}
            />
            <Route
              path="/register"
              element={<Navigate to="/" />}
            />
          </>
        )}
        {!token && (
          <>
            <Route path="/" element={<Navigate to="/login"/> }/>
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;