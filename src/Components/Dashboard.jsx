import React, { useState } from "react";
import { Typography } from "@mui/material";
import AddListIcon from "../assets/AddListIcon.png";
import SearchBar from "../Components/SearchBar";
import ListIcon from "../assets/list.png";
import Tick1 from "../assets/tick1.png";
import Tick2 from "../assets/tick2.png";
import Alarm from "../assets/alarm.png";
import AddListModal from "../Components/AddListModal"; // Import AddListModal
import "../Styles/List.scss";
import "../Styles/Notes.scss";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  // Toggle Modal Open/Close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="Dashboard"
        style={{
          margin: "2vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "4vw",
        }}
      >
        <div
          className="Statistics"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4vh",
            width: "90vw",
          }}
        >
          <SearchBar />
          <div
            className="boxes"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "2vw",
              flexWrap: "wrap", // Allows boxes to wrap on smaller screens
            }}
          >
            {[
              {
                background:
                  "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",
                opacity: "0.58",
                icon: ListIcon,
                count: 1550,
                label: "Total Lists",
              },
              {
                background:
                  "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",
                opacity: "0.81",
                icon: Tick1,
                count: 1220,
                label: "Total Tasks",
              },
              {
                background:
                  "linear-gradient(to right, #87ECAF 73%, #87ECAF 100%, #87ECAF 94%, #87ECAF 56%)",
                opacity: "0.73",
                icon: Tick2,
                count: 7,
                label: "Completed Tasks",
              },
              {
                background:
                  "linear-gradient(to right, #8384F8 26%, #8384F8 100%, #8384F8 100%, #8384F8 55%)",
                opacity: "0.77",
                icon: Alarm,
                count: 43,
                label: "Pending Tasks",
              },
            ].map((box, index) => (
              <div
                key={index}
                className="box"
                style={{
                  background: box.background,
                  opacity: box.opacity,
                  height: "12vh",
                  width: "clamp(100px, 14vw, 180px)", // Responsive width
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "1vh 1vw",
                  gap: "1vw",
                }}
              >
                <div
                  className="icon"
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    height: "clamp(30px, 4vw, 40px)", // Responsive icon size
                    width: "clamp(30px, 4vw, 40px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={box.icon}
                    alt=""
                    style={{
                      height: "70%", // Keep the icon size proportional
                      width: "70%",
                    }}
                  />
                </div>
                <div className="text" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                  <Typography
                    color="white"
                    style={{
                      fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
                      fontWeight: "600", // Responsive font size
                    }}
                  >
                    {box.count}
                  </Typography>
                  <Typography
                    color="white"
                    style={{
                      fontSize: "clamp(0.6rem, 1.5vw, 1rem)", // Responsive font size
                      textAlign: "center",
                    }}
                  >
                    {box.label}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add List Icon */}
        <img
          src={AddListIcon}
          className="AddListIcon"
          alt=""
          style={{
            height: "clamp(50px, 8vw, 100px)",
            transition: "transform 0.3s ease-in-out, height 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={handleOpen} // Open modal on clicking this button
        />
      </div>

      {/* Use the AddListModal Component */}
      <AddListModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Dashboard;
