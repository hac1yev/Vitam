import { Outlet } from "react-router-dom";
import Home from "../../pages/Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* <div className="splash active">
                <div className="splash-icon"></div>
            </div> */}

      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-8 text-start">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">
                        Support
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">
                        Privacy
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">
                        Terms of Service
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 text-end">
                  <p className="mb-0">
                    &copy; 2022 -{" "}
                    <a href="dashboard-default.html" className="text-muted">
                      Spark
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
