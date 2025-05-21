import { Badge } from "@mui/material";
import { Bell, ChevronDown, CircleUser } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-theme">
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown active">
            <Link to="/"
              className="nav-link dropdown-toggle position-relative"
              href="#"
              id="messagesDropdown"
              data-bs-toggle="dropdown"
            >
                <Badge badgeContent={4} color="error">
                    <Bell />
                </Badge>
            </Link>
            {/* <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
              aria-labelledby="messagesDropdown"
            >
              <div className="dropdown-menu-header">
                <div className="position-relative">4 New Messages</div>
              </div>
              <div className="list-group">
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Michelle Bilodeau</div>
                      <div className="text-muted small mt-1">
                        Nam pretium turpis et arcu. Duis arcu tortor.
                      </div>
                      <div className="text-muted small mt-1">5m ago</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Kathie Burton</div>
                      <div className="text-muted small mt-1">
                        Pellentesque auctor neque nec urna.
                      </div>
                      <div className="text-muted small mt-1">30m ago</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Alexander Groves</div>
                      <div className="text-muted small mt-1">
                        Curabitur ligula sapien euismod vitae.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                    </div>
                    <div className="col-10 ps-2">
                      <div className="text-dark">Daisy Seger</div>
                      <div className="text-muted small mt-1">
                        Aenean tellus metus, bibendum sed, posuere ac, mattis
                        non.
                      </div>
                      <div className="text-muted small mt-1">5h ago</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="dropdown-menu-footer">
                <Link to="/" href="#" className="text-muted">
                  Show all messages
                </Link>
              </div>
            </div> */}
          </li>
          <li className="nav-item dropdown ms-lg-2">
            <Link to="/"
              className="d-flex align-items-center gap-1 nav-link dropdown-toggle position-relative"
              href="#"
              id="alertsDropdown"
              data-bs-toggle="dropdown"
            >
                <CircleUser color="white" />
                Huseyn Alizade
                <ChevronDown width={16} />
            </Link>
            {/* <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
              aria-labelledby="alertsDropdown"
            >
              <div className="dropdown-menu-header">4 New Notifications</div>
              <div className="list-group">
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="ms-1 text-danger fas fa-fw fa-bell"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Update completed</div>
                      <div className="text-muted small mt-1">
                        Restart server 12 to complete the update.
                      </div>
                      <div className="text-muted small mt-1">2h ago</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="ms-1 text-warning fas fa-fw fa-envelope-open"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Lorem ipsum</div>
                      <div className="text-muted small mt-1">
                        Aliquam ex eros, imperdiet vulputate hendrerit et.
                      </div>
                      <div className="text-muted small mt-1">6h ago</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="ms-1 text-primary fas fa-fw fa-building"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">Login from 192.186.1.1</div>
                      <div className="text-muted small mt-1">8h ago</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" href="#" className="list-group-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-2">
                      <i className="ms-1 text-success fas fa-fw fa-bell-slash"></i>
                    </div>
                    <div className="col-10">
                      <div className="text-dark">New connection</div>
                      <div className="text-muted small mt-1">
                        Anna accepted your request.
                      </div>
                      <div className="text-muted small mt-1">12h ago</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="dropdown-menu-footer">
                <Link to="/" href="#" className="text-muted">
                  Show all notifications
                </Link>
              </div>
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
