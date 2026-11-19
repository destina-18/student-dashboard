
"use client";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

type SidebarProps = {
  open: boolean;
  activeMenu: string;
  onMenuChange: (menu: string) => void;
};

export default function Sidebar({
  open,
  activeMenu,
  onMenuChange,
}: SidebarProps) {
  const menus = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Data Siswa", icon: <PeopleIcon /> },
    { name: "Pengaturan", icon: <SettingsIcon /> },
  ];

  return (
    <Box className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <Box className="sidebar-logo">
        <Box className="sidebar-logo-icon">
          <img
            src="/images/logo-telkom.png"
            alt="Logo Telkom Schools"
            width={45}
            height={45}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Typography variant="h6">
          Student
        </Typography>
      </Box>

      <Typography className="sidebar-label">
        MENU UTAMA
      </Typography>

      <List className="sidebar-menu">
        {menus.map((menu) => (
          <ListItemButton
            key={menu.name}
            selected={activeMenu === menu.name}
            onClick={() => onMenuChange(menu.name)}
            className="sidebar-item"
          >
            <ListItemIcon>
              {menu.icon}
            </ListItemIcon>

            <ListItemText primary={menu.name} />
          </ListItemButton>
        ))}
      </List>

      <Box className="sidebar-footer">
        <Typography variant="caption">
          Tahun Ajaran 2026/2027
        </Typography>
      </Box>
    </Box>
  );
}
