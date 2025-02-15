import React, { useState } from "react";
import {
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Box,
  LinearProgress,
} from "@mui/material";
import TodolistButton from "../assets/todolistButton.png";

// Helper function to format the deadline date
const formatDeadline = (deadline) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(deadline).toLocaleDateString(undefined, options);
};

const TodoList = ({ todolistName, tasks, category, deadline }) => {
  const [checkedTasks, setCheckedTasks] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleCheck = (index) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[index] = !newCheckedTasks[index];
    setCheckedTasks(newCheckedTasks);
  };

  const completedTasks = checkedTasks.filter(Boolean).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <Box
      sx={{
        padding: "1rem",
        borderRadius: "8px",
        background: "#fff",
        width: "300px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "1rem", fontWeight: "bold" }}
      >
        {todolistName}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          marginBottom: "1rem",
          backgroundColor: "#D3D3D3",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#FF6636",
          },
        }}
      />

      <Typography
        variant="body2"
        sx={{ marginBottom: "1rem", fontWeight: "bold" }}
      >
        {completedTasks}/{tasks.length} tasks completed
      </Typography>
      <hr />
      <List
        sx={{
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={checkedTasks[index]}
              onChange={() => handleCheck(index)}
              style={{ color: "#FF6636" }}
            />
            <ListItemText
              primary={task}
              sx={{
                textDecoration: checkedTasks[index] ? "line-through" : "none",
                color: checkedTasks[index] ? "grey" : "inherit",
              }}
            />
          </ListItem>
        ))}
      </List>
      <hr />
      <div
        className="categoryBOX"
        style={{
          background: "#FD71AF",
          borderRadius: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.2rem",
          width: "clamp(60px,4vw,60px)",
        }}
      >
        <Typography variant="caption" style={{ color: "black" }}>
          {category}
        </Typography>
      </div>
      <div
        className="Deadline_Button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="deadline"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography style={{ color: "#E34444" }}>Deadline:</Typography>
          <Typography variant="body1" style={{ color: "grey" }}>
            &nbsp;{formatDeadline(deadline)}
          </Typography>
        </div>
        <img
          src={TodolistButton}
          alt=""
          style={{
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </Box>
  );
};

export default TodoList;
