"use client";

import { useMemo, useState } from "react";

import {
    Box,
    Typography,
    Paper,
    TextField,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    TablePagination,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { students } from "../data/student";

const statusStyle = {
    Aktif: { bg: "#e5f6e9", color: "#25813c" },
    Cuti: { bg: "#fff4e0", color: "#b26a00" },
    Nonaktif: { bg: "#eeeeee", color: "#666666" },
} as const;

export default function DataSiswaContent() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const filteredStudents = useMemo(() => {
        const keyword = search.toLowerCase().trim();

        return students.filter((student) => {
            return (
                student.name.toLowerCase().includes(keyword) ||
                student.nis.toLowerCase().includes(keyword) ||
                student.class.toLowerCase().includes(keyword) ||
                student.gender.toLowerCase().includes(keyword) ||
                student.status.toLowerCase().includes(keyword)
            );
        });
    }, [search]);

    const displayedStudents = filteredStudents.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <Box className="data-siswa-content">
            <Box sx={{ mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Data Siswa
                </Typography>

                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                    Kelola dan lihat seluruh informasi siswa.
                </Typography>
            </Box>

            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid #eeeeee",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        mb: 3,
                    }}
                >
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: 17 }}>
                            Daftar Siswa
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Total {filteredStudents.length} siswa ditemukan
                        </Typography>
                    </Box>

                    {/* SEARCH */}
                    <TextField
                        size="small"
                        placeholder="Cari nama, NIS, atau kelas..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(0);
                        }}
                        sx={{
                            width: {
                                xs: "100%",
                                sm: 270,
                            },
                        }}
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
                </Box>

                {/* TABLE */}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#fff5f5" }}>
                                {[
                                    "No",
                                    "Nama Siswa",
                                    "NIS",
                                    "Kelas",
                                    "Jenis Kelamin",
                                    "Status",
                                ].map((title) => (
                                    <TableCell
                                        key={title}
                                        sx={{
                                            fontWeight: 700,
                                            color: "#333333",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {title}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {displayedStudents.length > 0 ? (
                                displayedStudents.map((student, index) => (
                                    <TableRow key={student.id} hover>
                                        <TableCell>{page * rowsPerPage + index + 1}</TableCell>

                                        <TableCell>
                                            <Typography sx={{ fontWeight: 600 }}>{student.name}</Typography>
                                        </TableCell>

                                        <TableCell>{student.nis}</TableCell>

                                        <TableCell>{student.class}</TableCell>

                                        <TableCell>{student.gender}</TableCell>

                                        <TableCell>
                                            <Chip
                                                label={student.status}
                                                size="small"
                                                sx={{
                                                    fontWeight: 600,
                                                    backgroundColor: statusStyle[student.status].bg,
                                                    color: statusStyle[student.status].color,
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ py: 5 }}>
                                        <Typography color="text.secondary">
                                            Data siswa tidak ditemukan.
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={filteredStudents.length}
                    page={page}
                    onPageChange={(_, newPage) => {
                        setPage(newPage);
                    }}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setPage(0);
                    }}
                    rowsPerPageOptions={[6, 10]}
                    labelRowsPerPage="Baris:"
                    labelDisplayedRows={({ from, to, count }) =>
                        `${from}-${to} dari ${count}`
                    }
                />
            </Paper>
        </Box>
    );
}