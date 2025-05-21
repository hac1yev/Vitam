import { House, MessageSquareWarning, Network, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar">
          <Link className="sidebar-brand" to={'/'}>
            Spark
          </Link>
          <div className="sidebar-content">
            <ul className="sidebar-nav">
              <li className="sidebar-item">
                <Link
                  to={"/"}
                  data-bs-target="#dashboards"
                  className="sidebar-link collapsed"
                >
                  <House width={18} />
                  <span className="align-middle">Ana Sayfa</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <div
                  to='/flows'
                  data-bs-target="#pages"
                  data-bs-toggle="collapse"
                  className="sidebar-link collapsed"
                >
                  <Network width={18} />
                  <span className="align-middle">Akışlar</span>
                </div>
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled collapse "
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-settings.html">
                      Settings
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-clients.html">
                      Clients{" "}
                      <span className="sidebar-badge badge rounded-pill bg-primary">
                        New
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-invoice.html">
                      Invoice
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-tasks.html">
                      Tasks
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-chat.html">
                      Chat{" "}
                      <span className="sidebar-badge badge rounded-pill bg-primary">
                        New
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-blank.html">
                      Blank Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <Link
                  to={"/reports"}
                  data-bs-target="#auth"
                  data-bs-toggle="collapse"
                  className="sidebar-link collapsed"
                >
                  <MessageSquareWarning width={18} />
                  <span className="align-middle">Raporlar</span>
                </Link>
                <ul
                  id="auth"
                  className="sidebar-dropdown list-unstyled collapse "
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-sign-in.html">
                      Sign In
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-sign-up.html">
                      Sign Up
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="pages-reset-password.html"
                    >
                      Reset Password
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-404.html">
                      404 Page
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-500.html">
                      500 Page
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item">
                <Link
                  to={"/management"}
                  data-bs-target="#ui"
                  data-bs-toggle="collapse"
                  className="sidebar-link collapsed"
                >
                  <Settings width={18} />
                  <span className="align-middle">Yönetici İşlemleri</span>
                </Link>
                <ul
                  id="ui"
                  className="sidebar-dropdown list-unstyled collapse "
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-alerts.html">
                      Alerts
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-cards.html">
                      Cards
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-general.html">
                      General
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-grid.html">
                      Grid
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-modals.html">
                      Modals
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-offcanvas.html">
                      Offcanvas
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-placeholders.html">
                      Placeholders
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-notifications.html">
                      Notifications
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-tabs.html">
                      Tabs
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-typography.html">
                      Typography
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
    );
};

export default Sidebar;