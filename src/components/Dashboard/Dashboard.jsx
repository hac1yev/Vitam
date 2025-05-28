import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
