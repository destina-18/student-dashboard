
"use client";

import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ClassIcon from "@mui/icons-material/Class";

import StatCard from "./StatCard";
import StudentTable from "./StudentTable";

import { students as initialStudents } from "../data/student";
import type { Student } from "../data/student";

export default function DashboardContent() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const handleAddStudent = (newStudent: Omit<Student, "id">) => {
    setStudents((prev) => [
      ...prev,
      {
        ...newStudent,
        id: prev.length > 0
          ? Math.max(...prev.map((s) => s.id)) + 1
          : 1,
      },
    ]);
  };

  // Update
  const handleUpdateStudent = (updatedStudent: Student) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );
  };

  // Delete
  const handleDeleteStudent = (id: number) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  const totalStudents = students.length;

  const maleStudents = students.filter(
    (student) => student.gender === "Laki-laki"
  ).length;

  const femaleStudents = students.filter(
    (student) => student.gender === "Perempuan"
  ).length;

  const totalClasses = new Set(
    students.map((student) => student.class)
  ).size;

  // Data siswa (perkelas)
  const classData = Array.from(
    new Set(students.map((student) => student.class))
  ).map((className) => ({
    name: className,
    total: students.filter(
      (student) => student.class === className
    ).length,
  }));

  const maxStudents = Math.max(
    ...classData.map((item) => item.total),
    1
  );

  return (
    <Box className="dashboard-content">
      <Box className="dashboard-heading">
        <Typography variant="h5">
          Dashboard
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Selamat datang! Berikut ringkasan data siswa sekolah.
        </Typography>
      </Box>

      {/* Statistik */}
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

      {/* Tabel dan statistik kelas */}
      <Box className="dashboard-grid">
        <StudentTable
          students={students}
          onAddStudent={handleAddStudent}
          onUpdateStudent={handleUpdateStudent}
          onDeleteStudent={handleDeleteStudent}
        />

        <Card className="class-card">
          <Typography sx={{ fontWeight: 700 }}>
            Siswa per Kelas
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Jumlah siswa berdasarkan kelas
          </Typography>

          <Box className="class-list">
            {classData.length > 0 ? (
              classData.map((item) => (
                <Box className="class-item" key={item.name}>
                  <Typography
                    variant="caption"
                    className="class-name"
                  >
                    {item.name}
                  </Typography>

                  <Box className="class-progress">
                    <Box
                      className="class-progress-fill"
                      sx={{
                        width: `${(item.total / maxStudents) * 100}%`,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 700 }}
                  >
                    {item.total}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                Belum ada data kelas.
              </Typography>
            )}
          </Box>

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
