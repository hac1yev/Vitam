import { HomeIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarMenuLinks } from "../../demo/sidebarLinks";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const isOpenSidebar = useSelector(
    (state) => state.sidebarToggleReducer.isOpenSidebar
  );
  const [open, setOpen] = useState("");
  const [selectedMenuItem, setSelectedMenuItem] = useState("as1");
  const { t } = useTranslation("sidebar");

  const handleListItemClick = (event, id) => {
    setSelectedMenuItem(id);
  };

  const handleClick = (id) => {
    if (id === open) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <nav id="sidebar" className={isOpenSidebar ? "sidebar" : "sidebar toggled"}>
      <Link className="sidebar-brand" to={"/"}>
        <img src={logo} alt="logo" />
        B-Flow
      </Link>
      <div className="sidebar-content">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
        >
          <Link to={"/"} className="sidebar-item">
            <ListItemButton
              selected={selectedMenuItem === "as1"}
              onClick={(event) => handleListItemClick(event, "as1")}
            >
              <ListItemIcon>
                <HomeIcon width={18} />
              </ListItemIcon>
              <ListItemText
                slotProps={{ primary: { fontSize: "15px" } }}
                primary={t("sidebar.home")}
              />
            </ListItemButton>
          </Link>
          {sidebarMenuLinks.map((link) => (
            <Box key={link.id}>
              <ListItemButton
                onClick={handleClick.bind(null, link.id)}
                className="list-item-button"
              >
                <ListItemIcon>
                  <link.icon width={18} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{ primary: { fontSize: "15px" } }}
                  primary={t(link.title)}
                />
                {open === link.id ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={link.id === open} timeout={300} unmountOnExit>
                <List component="div" disablePadding>
                  {link.children.map((child) => (
                    <Link
                      to={child.to}
                      sx={{ pl: 4 }}
                      key={child.id}
                      className="sidebar-child-item"
                    >
                      <ListItemButton
                        selected={selectedMenuItem === child.id}
                        onClick={(event) =>
                          handleListItemClick(event, child.id)
                        }
                        className="sidebar-child-item-button"
                      >
                        <ListItemIcon>
                          <child.icon width={18} />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{ primary: { fontSize: "15px" } }}
                          primary={t(child.label)}
                        />
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </div>
    </nav>
  );
};

export default Sidebar;
