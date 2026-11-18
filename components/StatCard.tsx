
"use client";

import { Card, Box, Typography } from "@mui/material";

type StatCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  color?: string;
  bgColor?: string;
};

export default function StatCard({
  title,
  value,
  icon,
  color = "#2563eb",
  bgColor = "#eff6ff",
}: StatCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: "18px",
        border: "1px solid #e8edf5",
        bgcolor: "#ffffff",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 25px rgba(15,23,42,0.07)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              color: "#64748b",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#172554",
              mt: 1,
            }}
          >
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: bgColor,
            color: color,
            "& svg": {
              fontSize: 27,
            },
          }}
        >
          {icon}
        </Box>
      </Box>
    </Card>
  );
}
