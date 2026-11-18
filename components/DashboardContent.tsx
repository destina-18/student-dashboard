"use client";

import { Box, Card, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ClassIcon from "@mui/icons-material/Class";

import StatCard from "./StatCard";
import StudentTable from "./StudentTable";

import { students } from "../data/student";

type DashboardContentProps = {
  search: string;
};

export default function DashboardContent({ search }: DashboardContentProps) {
  // STATISTIK SISWA
  const totalStudents = students.length;

  const maleStudents = students.filter(
    (student) => student.gender === "Laki-laki"
  ).length;

  const femaleStudents = students.filter(
    (student) => student.gender === "Perempuan"
  ).length;

  const totalClasses = new Set(students.map((student) => student.class)).size;

  // PENCARIAN DATA SISWA
  const keyword = search.toLowerCase().trim();

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(keyword) ||
      student.nis.toLowerCase().includes(keyword) ||
      student.class.toLowerCase().includes(keyword)
    );
  });

  // DATA JUMLAH SISWA PER KELAS
  const classData = Array.from(
    new Set(students.map((student) => student.class))
  ).map((className) => ({
    name: className,
    total: students.filter((student) => student.class === className).length,
  }));

  const maxStudents = Math.max(...classData.map((item) => item.total), 1);

  return (
    <Box className="dashboard-content">
      {/* JUDUL DASHBOARD */}
      <Box className="dashboard-heading">
        <Typography variant="h5">Dashboard</Typography>

        <Typography variant="body2" color="text.secondary">
          Selamat datang! Berikut ringkasan data siswa sekolah.
        </Typography>
      </Box>

      {/* STATISTIK */}
      <Box className="stats-container">
        <StatCard
          title="Total Siswa"
          value={totalStudents}
          icon={<PeopleIcon />}
        />

        <StatCard
          title="Laki-laki"
          value={maleStudents}
          icon={<MaleIcon />}
        />

        <StatCard
          title="Perempuan"
          value={femaleStudents}
          icon={<FemaleIcon />}
        />

        <StatCard
          title="Jumlah Kelas"
          value={totalClasses}
          icon={<ClassIcon />}
        />
      </Box>

      {/* TABEL DAN INFORMASI KELAS */}
      <Box className="dashboard-grid">
        {/* TABEL SISWA */}
        <StudentTable students={filteredStudents} />

        {/* INFORMASI SISWA PER KELAS */}
        <Card className="class-card">
          <Typography sx={{ fontWeight: 700 }}>Siswa per Kelas</Typography>

          <Typography variant="caption" color="text.secondary">
            Jumlah siswa berdasarkan kelas
          </Typography>

          <Box className="class-list">
            {classData.map((item) => (
              <Box className="class-item" key={item.name}>
                <Typography variant="caption" className="class-name">
                  {item.name}
                </Typography>

                <Box className="class-progress">
                  <Box
                    className="class-progress-fill"
                    sx={{ width: `${(item.total / maxStudents) * 100}%` }}
                  />
                </Box>

                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  {item.total}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* TOTAL SISWA */}
          <Box className="class-total">
            <Typography variant="caption" color="text.secondary">
              Total seluruh siswa
            </Typography>

            <Typography color="primary" sx={{ fontWeight: 700 }}>
              {totalStudents} Siswa
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}