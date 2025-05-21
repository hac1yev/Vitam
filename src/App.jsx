import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  // const [isShown,setIsShown] = useState(true);

  return (
    <>
      <Dashboard />
      {/* <Routes>
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  );
};

export default App;