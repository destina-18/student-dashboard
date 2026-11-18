"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";
import DataSiswaContent from "@/components/DataSiswaContent";
import ProfilContent from "@/components/ProfilContent";

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
          showSearch={activeMenu !== "Pengaturan"}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onMenuChange={setActiveMenu}
        />

        <Box className="dashboard-content">
          {activeMenu === "Dashboard" && <DashboardContent search={search} />}

          {activeMenu === "Data Siswa" && <DataSiswaContent />}

          {activeMenu === "Pengaturan" && <ProfilContent />}
        </Box>
      </Box>
    </Box>
  );
}