import { Badge } from "@mui/material";
import { AlignJustify, Bell, ChevronDown, CircleUser } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SidebarToggleSliceAction } from "../../store/sidebar-toggle-slice";
import { useState } from "react";
import ProfilePopover from "../Popovers/ProfilePopover";

const Navbar = () => {
  const isOpenSidebar = useSelector((state) => state.sidebarToggleReducer.isOpenSidebar);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleToggleSidebar = () => {
    dispatch(SidebarToggleSliceAction.sidebarToggleAction(!isOpenSidebar));
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            className="nav-item dropdown ms-lg-2"
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
