
"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";
import DataSiswaContent from "../components/DataSiswaContent";
import ProfilContent from "../components/ProfilContent";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleMenuChange = (menu: string) => {
    setActiveMenu(menu);
    setSidebarOpen(false);
  };

  const title = activeMenu;

  return (
    <Box className="app-layout">
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        activeMenu={activeMenu}
        onMenuChange={handleMenuChange}
      />

      {/* Overlay sidebar */}
      {sidebarOpen && (
        <Box
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Box className="main-content">
        {/* Navbar */}
        <Navbar
          onToggleSidebar={handleToggleSidebar}
          onMenuChange={handleMenuChange}
          title={title}
        />

        {/* Halaman berdasarkan menu aktif */}
        <Box className="dashboard-content">
          {activeMenu === "Dashboard" && (
            <DashboardContent />
          )}

          {activeMenu === "Data Siswa" && (
            <DataSiswaContent />
          )}

          {activeMenu === "Pengaturan" && (
            <ProfilContent />
          )}
        </Box>
      </Box>
    </Box>
  );
}
