import React, { useEffect, useState } from "react";

import 
{
  Container,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

import NotificationCard from "../pages/NotificationCard";

function AllNotifications() {

  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {

    // Dummy API Data
    const data = [
      {
        id: 1,
        message: "Placement drive tomorrow",
        type: "placement",
        time: "2 mins ago",
        read: false,
      },
      {
        id: 2,
        message: "Semester result published",
        type: "result",
        time: "10 mins ago",
        read: true,
      },
      {
        id: 3,
        message: "Workshop registration open",
        type: "event",
        time: "20 mins ago",
        read: false,
      },
    ];

    setNotifications(data);

  }, []);

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter(
          (item) => item.type === filter
        );

  return (
    <Container sx={{ marginTop: 3 }}>

      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ marginBottom: 3 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="placement">
          Placement
        </MenuItem>
        <MenuItem value="result">
          Result
        </MenuItem>
        <MenuItem value="event">
          Event
        </MenuItem>
      </Select>

      {filteredNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </Container>
  );
}

export default AllNotifications;
