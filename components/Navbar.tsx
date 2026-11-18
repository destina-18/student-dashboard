"use client";

import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

type NavbarProps = {
  search: string;
  setSearch: (value: string) => void;
  onToggleSidebar: () => void;
  title: string;
};

export default function Navbar({
  search,
  setSearch,
  onToggleSidebar,
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
        <TextField
          size="small"
          placeholder="Cari nama atau NIS..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="navbar-search"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />

        <IconButton className="notification-button">
          <NotificationsNoneIcon />
        </IconButton>

        <Box className="navbar-profile">
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
