import { useState } from "react";
import { Typography, useMediaQuery, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import LaunchIcon from "@mui/icons-material/Launch";
import "../Styles/List.css";
import "../Styles/Notes.scss";
import ListIcon from "../assets/list.png";
import Tick1 from "../assets/tick1.png";

const colorOptions = [
    { label: 'Red', value: '#FF0000' },
    { label: 'Green', value: '#00FF00' },
    { label: 'Blue', value: '#0000FF' },
    { label: 'Orange', value: '#FFA500' },
    { label: 'Purple', value: '#800080' },
    { label: 'Yellow', value: '#FFFF00' },
    { label: 'Cyan', value: '#00FFFF' },
    { label: 'Magenta', value: '#FF00FF' },
    { label: 'Brown', value: '#A52A2A' },
    { label: 'Pink', value: '#FFC0CB' }
];

// Options Menu Component
const OptionsMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div style={{ position: "relative" }}>
            <IconButton onClick={toggleMenu}>
                <MenuIcon />
            </IconButton>

            {isMenuOpen && (
                <div
                    className="options"
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        zIndex: 1000,
                        backgroundColor: "#f0f0f0",
                        padding: "10px",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography
                        variant="caption"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            marginBottom: "5px",
                        }}
                    >
                        <LaunchIcon style={{ marginRight: "5px" }} />
                        Open
                    </Typography>
                    <hr />
                    <Typography
                        variant="caption"
                        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                    >
                        <EditIcon style={{ marginRight: "5px" }} />
                        Edit Name
                    </Typography>
                </div>
            )}
        </div>
    );
};

// Categories Component
const Categories = () => {
    const isMobile = useMediaQuery("(max-width:800px)");
    const [boxData, setBoxData] = useState([
        {
            title: "Team Projects",
            tagColor: "#FD71AF",
            boxes: [
                {
                    icon: ListIcon,
                    count: 1550,
                    label: "Total Lists",
                    gradient: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",
                    opacity: 0.75,
                },
                {
                    icon: Tick1,
                    count: 1220,
                    label: "Total Tasks",
                    gradient: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",
                    opacity: 0.81,
                },
            ],
        },
        // ... other categories ...
    ]);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newCategory, setNewCategory] = useState({ title: "", tagColor: "" });

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };
    const handleCategoryChange = (e) => {
      const { name, value } = e.target;
  
      if (name === "title" && value.length > 15) {
          return; // Prevent input if it's more than 10 characters
      }
  
      setNewCategory({ ...newCategory, [name]: value });
  };
  
  
  
  
    const addCategory = () => {
        setBoxData([
            ...boxData,
            {
                title: newCategory.title,
                tagColor: newCategory.tagColor,
                boxes: [
                    {
                        icon: ListIcon,
                        count: 1550,
                        label: "Total Lists",
                        gradient: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",
                        opacity: 0.75,
                    },
                    {
                        icon: Tick1,
                        count: 1220,
                        label: "Total Tasks",
                        gradient: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",
                        opacity: 0.81,
                    },
                ],
            },
        ]);
        handleDialogClose();
    };

    return (
        <div className="categories_Page">
            <div className="addCategory" style={{ display: "flex", alignItems: "center", gap: "2vh" }}>
                <Typography variant="h5" style={{ margin: "5vh" }} fontWeight={600}>
                    Categories
                </Typography>
                <Button
                    style={{ color: "#000", background: "#ABBCF2" }}
                    aria-label="add"
                    onClick={handleDialogOpen}
                >
                    <AddIcon />
                </Button>
            </div>

            <div
                className="Categories_Section"
                style={{
                    gap: "clamp(1vh, 3vh, 5vh)",
                    margin: "clamp(2vh, 3vh, 4vh) 0",
                    padding: "1vw",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                }}
            >
                {boxData.map((box, index) => (
                    <div
                        key={index}
                        className="Box"
                        style={{
                            border: "2px solid black",
                            height: isMobile ? "clamp(25vw, 30vw, 35vw)" : "clamp(15vw, 20vw, 25vw)",
                            borderRadius: "4px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            gap: "clamp(1vh, 2vh, 3vh)",
                            padding: "clamp(0.5vw, 1vw, 1.5vw)",
                        }}
                    >
                        <div
                            className="upperSection"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "clamp(0.5vw, 1vw, 1.5vw)",
                            }}
                        >
                            <div
                                className="tag"
                                style={{
                                    height: "clamp(1.5vh, 2.5vh, 3vh)",
                                    width: "clamp(1.5vh, 2.5vh, 3vh)",
                                    borderRadius: "4px",
                                    background: box.tagColor,
                                }}
                            ></div>
                            <Typography variant="caption">{box.title}</Typography>
                            <OptionsMenu />
                        </div>
                        <div
                            className="lowerSection"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "clamp(0.5vh, 1vh, 1.5vh)",
                            }}
                        >
                            {box.boxes.map((subBox, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="box"
                                    style={{
                                        padding: "2vw 1vw",
                                        background: subBox.gradient,
                                        opacity: subBox.opacity,
                                        height: "clamp(3vh, 5vh, 7vh)",
                                        width: isMobile?"clamp(6vw, 8vw, 10vw)": "clamp(8vw, 12vw, 12vw)",
                                        borderRadius: "6px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent:"center",
                                        gap: "1vw",
                                        flexDirection:isMobile?"column":"row",

                                    }}
                                >
                                    <div
                                        className="icon"
                                        style={{
                                            background: "white",
                                            borderRadius: "50%",
                                            height: isMobile? "clamp(8px, 20px, 25px)": "clamp(10px, 30px, 35px)",
                                            width:isMobile? "clamp(8px, 20px, 25px)": "clamp(10px, 30px, 35px)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src={subBox.icon}
                                            alt=""
                                            style={{
                                                height: isMobile?"clamp(10px, 15px, 20px)":"clamp(15px, 20px, 25px)",
                                                width: isMobile?"clamp(10px, 15px, 20px)":"clamp(15px, 20px, 25px)",
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="text"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <p style={{fontSize:"2vw",fontWeight:"bolder"}}>{subBox.count}</p>
                                        <p style={{fontSize:isMobile?"1vw":"1.2vw"}}>
                                            {subBox.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dialog for adding a new category */}
            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Category Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name="title"
                        value={newCategory.title}
                        onChange={handleCategoryChange}
                        
                    />
                    <FormControl fullWidth style={{ marginTop: "1em" }}>
                        <InputLabel>Tag Color</InputLabel>
                        <Select
                            label="Tag Color"
                            name="tagColor"
                            value={newCategory.tagColor || "#FF0000"}
                            onChange={handleCategoryChange}
                        >
                            {colorOptions.map((color) => (
                                <MenuItem key={color.value} value={color.value}>
                                    {color.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={addCategory} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Categories;
