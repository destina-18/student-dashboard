"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <Box className="app-layout">
      <Sidebar
        open={sidebarOpen}
        activeMenu={activeMenu}
        onMenuChange={(menu) => {
          setActiveMenu(menu);
          setSidebarOpen(false);
        }}
      />

      {sidebarOpen && (
        <Box
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Box className="main-content">
        <Navbar
          search={search}
          setSearch={setSearch}
          title={activeMenu}
          onToggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        {activeMenu === "Dashboard" ? (
          <DashboardContent search={search} />
        ) : (
          <Box className="dashboard-content">
            <h2>{activeMenu}</h2>
            <p>
              Halaman {activeMenu} belum tersedia.
            </p>
          </Box>
        )}
      </Box>
    </Box>
  );
}