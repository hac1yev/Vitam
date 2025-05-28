import { Badge } from "@mui/material";
import { AlignJustify, Bell, ChevronDown, CircleUser } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SidebarToggleSliceAction } from "../../store/sidebar-toggle-slice";
import { useState } from "react";
import ProfilePopover from "../Popovers/ProfilePopover";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const isOpenSidebar = useSelector((state) => state.sidebarToggleReducer.isOpenSidebar);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { i18n } = useTranslation();
  const lang = localStorage.getItem("lang");

  const handleToggleSidebar = () => {
    dispatch(SidebarToggleSliceAction.sidebarToggleAction(!isOpenSidebar));
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setAnchorEl(null);
  };

   const handleLangChange = (e) => {
      i18n.changeLanguage(e.target.value);
      localStorage.setItem('lang', e.target.value)
    };      

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <nav className="navbar navbar-expand navbar-theme">
      <div className="sidebar-toggle d-flex me-2" onClick={handleToggleSidebar}>
				<AlignJustify width={24} color="#d9d9d9" />
			</div>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ms-auto">
          <select className="language-selector" onChange={handleLangChange}>
            <option value="az" selected={lang === 'az'}>AZE</option>
            <option value="en" selected={lang === 'en'}>EN</option>
          </select>
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
          </li>
          <li 
            className="nav-item dropdown"
            aria-describedby={id} variant="contained" 
            onClick={handleClick}
          >
            <div
              className="d-flex align-items-center gap-1 nav-link dropdown-toggle position-relative"
              id="alertsDropdown"
              data-bs-toggle="dropdown"
            >
                <CircleUser color="white" />
                {userInfo.adi}{" "}{userInfo.soyadi}
                <ChevronDown width={16} />
            </div>
          </li>
          <ProfilePopover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;