import { House } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarMenuLinks } from "../../demo/sidebarLinks";
import { useSelector } from "react-redux";
import logo from '../../assets/logo.png';

const Sidebar = () => {
  const isOpenSidebar = useSelector((state) => state.sidebarToggleReducer.isOpenSidebar);
  const [openDropdown, setOpenDropdown] = useState({
    flows: false,
    reports: false,
    management: false,
  });

  return (
    <nav id="sidebar" className={isOpenSidebar ? "sidebar" : "sidebar toggled"}>
      <Link className="sidebar-brand" to={"/"}>
        <img src={logo} alt="logo" />
        B-Flow
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
          {sidebarMenuLinks.map((link) => (
            <li className="sidebar-item" key={link.id}>
              <div
                onClick={() =>
                  setOpenDropdown((prev) => {
                    return {
                      ...prev,
                      [link.id]: !prev[link.id],
                    };
                  })
                }
                data-bs-toggle="collapse"
                className={
                  openDropdown[link.id]
                    ? "sidebar-link"
                    : "sidebar-link collapsed"
                }
              >
                <link.icon width={18} />
                <span className="align-middle">{link.title}</span>
              </div>
              {openDropdown[link.id] && (
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled"
                  data-bs-parent="#sidebar"
                >
                  {link.children?.map((child, index) => (
                    <li
                      className="sidebar-item"
                      key={index}
                      onClick={() =>
                        setOpenDropdown((prev) => {
                          return {
                            ...prev,
                            [link.id]: false,
                          };
                        })
                      }
                    >
                      <Link to={child.to} className="sidebar-link">
                        <child.icon width={16} />
                        <span className="align-middle">{child.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;