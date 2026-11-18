
"use client";

import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";

import {
  Box,
  Card,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TablePagination,
  Avatar,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import type { Student } from "../data/student";

type StudentTableProps = {
  students: Student[];
};

export default function StudentTable({
  students,
}: StudentTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const visibleStudents = students.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  const handleAddStudent = () => {
    alert("Fitur tambah siswa belum menggunakan backend.");
  };

  return (
    <Card className="student-card">
      <Box className="table-title">
        <Box>
          <Typography sx={{ fontWeight: 700 }}>
            Data Siswa
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Daftar informasi siswa sekolah
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleAddStudent}
          className="add-button"
        >
          Tambah Siswa
        </Button>
      </Box>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nama Siswa</TableCell>
              <TableCell>NIS</TableCell>
              <TableCell>Kelas</TableCell>
              <TableCell>Jenis Kelamin</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleStudents.length > 0 ? (
              visibleStudents.map((student) => (
                <TableRow
                  key={student.id}
                  hover
                >
                  <TableCell>
                    <Box className="student-name">
                      <Avatar className="student-avatar">
                        {student.name.charAt(0)}
                      </Avatar>

                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600 }}
                      >
                        {student.name}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    {student.nis}
                  </TableCell>

                  <TableCell>
                    {student.class}
                  </TableCell>

                  <TableCell>
                    {student.gender}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={student.status}
                      size="small"
                      className={`status-chip status-${student.status.toLowerCase()}`}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                >
                  Data siswa tidak ditemukan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={students.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[6, 10]}
        labelRowsPerPage="Baris:"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} dari ${count}`
        }
      />
    </Card>
  );
}
