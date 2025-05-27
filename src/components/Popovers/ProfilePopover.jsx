import { List, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from "@mui/material";
import { LockOpen, LogOut, Pencil, User } from "lucide-react";

const ProfilePopover = ({ id, open, anchorEl, handleClose }) => {
  const handleSignOut = () => {
    localStorage.removeItem("isLogin");
    window.location.reload();
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <List
        className="profile-popover-list"
        sx={{ width: 300, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <Pencil width={18} />
          </ListItemIcon>
          <ListItemText slotProps={{ primary: { fontSize: '14px' } }} primary="Bilgilerimi Güncelle" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LockOpen width={18} />
          </ListItemIcon>
          <ListItemText slotProps={{ primary: { fontSize: '14px' } }} primary="Şifremi Değiştir" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <User width={18} />
          </ListItemIcon>
          <ListItemText slotProps={{ primary: { fontSize: '14px' } }} primary="Vekalet" />
        </ListItemButton>
        <ListItemButton onClick={handleSignOut}>
          <ListItemIcon>
            <LogOut width={18} />
          </ListItemIcon>
          <ListItemText slotProps={{ primary: { fontSize: '14px' } }} primary="Oturumu Kapat" />
        </ListItemButton>
      </List>
    </Popover>
  );
};

export default ProfilePopover;
