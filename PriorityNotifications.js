import React from "react";

import {
  Container,
  Typography,
} from "@mui/material";

import NotificationCard from "../pages/NotificationCard";

function PriorityNotifications() {

  const notifications = [
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
      read: false,
    },
    {
      id: 3,
      message: "Workshop registration open",
      type: "event",
      time: "20 mins ago",
      read: false,
    },
  ];

  const priorityWeight = {
    placement: 3,
    result: 2,
    event: 1,
  };

  const getTimeScore = (time) => {
    const mins = parseInt(time);
    return 100 - mins;
  };

  const topNotifications = notifications
    .map((item) => ({
      ...item,
      score:
        priorityWeight[item.type] * 100 +
        getTimeScore(item.time),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return (
    <Container sx={{ marginTop: 3 }}>

      <Typography variant="h4" gutterBottom>
        Priority Inbox
      </Typography>

      {topNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </Container>
  );
}

export default PriorityNotifications;