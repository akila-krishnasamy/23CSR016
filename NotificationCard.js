import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        backgroundColor: notification.read
          ? "#f5f5f5"
          : "#e3f2fd",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.message}
        </Typography>

        <Typography>
          Type: {notification.type}
        </Typography>

        <Typography>
          Time: {notification.time}
        </Typography>

        <Chip
          label={notification.read ? "Viewed" : "New"}
          color={notification.read ? "default" : "primary"}
          sx={{ marginTop: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export default NotificationCard;