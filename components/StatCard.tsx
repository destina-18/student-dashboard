
import { Box, Card, Typography } from "@mui/material";
import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <Card className="stat-card">
      <Box className="stat-icon">
        {icon}
      </Box>

      <Box className="stat-info">
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: 700 }}
        >
          {value}
        </Typography>
      </Box>
    </Card>
  );
}
