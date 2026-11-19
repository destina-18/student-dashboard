
"use client";

import {
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

type NavbarProps = {
  onToggleSidebar: () => void;
  onMenuChange: (menu: string) => void;
  title: string;
};

export default function Navbar({
  onToggleSidebar,
  onMenuChange,
  title,
}: NavbarProps) {
  return (
    <Box className="navbar">
      <Box className="navbar-left">
        <IconButton
          onClick={onToggleSidebar}
          className="menu-toggle"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">
          {title}
        </Typography>
      </Box>

      <Box className="navbar-right">
        <IconButton className="notification-button">
          <NotificationsNoneIcon />
        </IconButton>

        <Box
          className="navbar-profile"
          onClick={() => onMenuChange("Pengaturan")}
          sx={{ cursor: "pointer" }}
        >
          <Avatar className="profile-avatar">
            A
          </Avatar>

          <Box className="profile-text">
            <Typography variant="caption" color="text.secondary">
              Admin Sekolah
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
