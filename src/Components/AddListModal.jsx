import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  LinearProgress,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/AddListModal.scss";
import AddListIcon from "../assets/Iconly/Bulk/Plus.png";

const AddListModal = ({ open, handleClose }) => {
  const [listItems, setListItems] = useState([
    "I want to know who wrote a review on my course.",
    "I want to know daily how many people visited my profile.",
    "I want to know who downloaded my lecture attachment file.",
  ]);

  // State to keep track of checked items
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const handleDeleteItem = (index) => {
    const updatedItems = listItems.filter((_, i) => i !== index);
    const updatedChecked = checkedItems.filter((_, i) => i !== index);
    setListItems(updatedItems);
    setCheckedItems(updatedChecked); // Remove the corresponding checked item
  };

  const handleCopyItem = (index) => {
    const itemToCopy = listItems[index];
    navigator.clipboard.writeText(itemToCopy);
  };

  const handleAddItem = () => {
    setListItems([...listItems, ""]);
    setCheckedItems([...checkedItems, false]); // Add new item as unchecked
  };

  const handleChangeItem = (index, value) => {
    const updatedItems = [...listItems];
    updatedItems[index] = value;
    setListItems(updatedItems);
  };

  const handleCheckboxChange = (index) => {
    const updatedChecked = [...checkedItems];
    updatedChecked[index] = !updatedChecked[index]; // Toggle the checked status
    setCheckedItems(updatedChecked);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Calculate the number of checked items and the total
  const totalItems = listItems.length;
  const checkedCount = checkedItems.filter(Boolean).length;
  const progressPercentage = totalItems ? (checkedCount / totalItems) * 100 : 0;

  return (
    <Modal open={open} onClose={handleClose} className="AddListModal">
      <Box className="modalContent">
        <div className="closeButton" onClick={handleClose}>
          <CloseIcon className="close" />
        </div>

        {/* Title Input */}
        <TextField
          fullWidth
          autoComplete="off"
          placeholder="Title..."
          variant="outlined"
          size="large"
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: "4rem",
              fontWeight: "bold",
              padding: "10px 0",
              background:"#ABBCF2",
              color:"black"
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                color:"black"
              },
            },
            "& input": {
              border: "none",
              color:"black"


            },
          }}
        />
        {/* List */}
        <div style={{ width: "100%", margin: "10px 2vw" }}>
      <LinearProgress variant="determinate" value={progressPercentage} sx={{
                  backgroundColor: "#E9EAF0",
                  height:"1vh",
                  width:"70%",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#484F69", 
                  }
      }} />
      <Typography variant="body2" color="textSecondary" fontWeight={"800"} style={{marginTop:"2vh"}}  >
        {`${checkedCount} / ${totalItems}`}
      </Typography>
    </div>
        

        <hr style={{ background: "white", color: "white" }} />

        {/* Task List Items */}
        {listItems.map((item, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="1vw"
            style={{ marginBottom: "10px" }}
          >
            {/* Checkbox to mark task as completed */}
            <Checkbox
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
              style={{ color: "black" }}
            />
            <TextField
              fullWidth
              value={item}
              onChange={(e) => handleChangeItem(index, e.target.value)}
              placeholder="Enter list item..."
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  background: "white",
                  borderRadius: "4px",
                  "& fieldset": {
                    borderColor: "black", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "black", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black", // Border color when focused
                  },
                },
                textDecoration: checkedItems[index] ? "line-through" : "none", // Apply line-through if checked
                color: "black",
              }}
            />

            <IconButton onClick={() => handleCopyItem(index)}>
              <ContentCopyIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteItem(index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}

        {/* Add Item Icon */}
        <div style={{ display: "flex", gap: "2vw", marginLeft: "1vw" }}>
          <img className="AddIcon" src={AddListIcon} onClick={handleAddItem} alt="" />
          <p style={{ color: "grey" }}>Add Task...</p>
        </div>

        <hr style={{ background: "white", color: "white" }} />

        {/* Category Dropdown */}
        <Typography variant="h5" fontWeight={"700"}>Category</Typography>
        <TextField
          select
          fullWidth
          variant="outlined"
          sx={{
            width: "40%",
            background: "white",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "black", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", // Border color when focused
              },
            },
          }}
          className="categoryDropdown"
        >
          <MenuItem value="Goals">Goals</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Routine">Routine</MenuItem>
        </TextField>

        {/* Deadline Selectors */}
        <Typography variant="h5" fontWeight={"700"}>Deadline</Typography>
        <Box className="deadlineSection" display="flex" flexDirection="column" gap={2}>
          {/* DatePicker for date selection */}
          <DatePicker
  selected={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  placeholderText="Select Date"
  className="datePickerInput"
  style={{
    padding: "10px !important",       // Add padding with !important
    borderRadius: "8px !important",   // Add rounded corners with !important
    border: "1px solid #000 !important", // Optional: Add a border for better visibility
    width: "100% !important"          // Optional: Adjust width
  }}
/>

        </Box>

        {/* Options (Pin, Archive, Delete) */}
<OptionsSection></OptionsSection>
        {/* Buttons */}
        <Box className="modalActions">
          <Button
            variant="contained"
            style={{ background: "#1A1D29", color: "white", paddingLeft: "4vw", paddingRight: "4vw" }}
            onClick={handleClose}
          >
            Done
          </Button>
          <Button
            variant="outlined"
            style={{ background: "white", color: "#1A1D29", paddingLeft: "4vw", paddingRight: "4vw" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddListModal;

const OptionsSection = () => {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    // Set selected option to the clicked one; if clicked again, uncheck it
    setSelectedOption(selectedOption === option ? null : option);
  };

  return (
    <Box className="optionsSection">
      <FormControlLabel
        control={
          <Checkbox
            style={{ color: "black" }}
            checked={selectedOption === "pin"} // Check if this option is selected
            onChange={() => handleCheckboxChange("pin")}
          />
        }
        label="Pin List"
      />
      <FormControlLabel
        control={
          <Checkbox
            style={{ color: "black" }}
            checked={selectedOption === "archive"} // Check if this option is selected
            onChange={() => handleCheckboxChange("archive")}
          />
        }
        label="Archive List"
      />
      <FormControlLabel
        control={
          <Checkbox
            style={{ color: "black" }}
            checked={selectedOption === "delete"} // Check if this option is selected
            onChange={() => handleCheckboxChange("delete")}
          />
        }
        label="Delete List"
      />
    </Box>
  );
};

