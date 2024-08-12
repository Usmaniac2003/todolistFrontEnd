import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AddListIcon  from "../assets/AddListIcon.png"
import SearchBar from '../Components/SearchBar'
import  ListIcon from "../assets/list.png"
import Tick1 from "../assets/tick1.png"
import Tick2 from "../assets/tick2.png"
import Alarm from "../assets/alarm.png"
import AddNote from "../assets/Iconly/Bulk/Plus.png"
import { Typography,Box } from '@mui/material'
import CompletionPieChart from '../Components/PieChart'
import MyCustomCalendar from '../Components/Calendar'
import ListItem from '../Components/ListItem'
import DrawIcon from '@mui/icons-material/Draw';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';

import "../Styles/List.css"
import TodoListTemplate from '../Components/Template'
import TodoList from '../Components/ToDoList'
// templates data
const todoLists = [
    {
      todolistName: "Work Projects",
      tasks: [
        "Complete project report",
        "Review team meeting notes",
        "Update resume",
        "Send progress update to manager",
        "Prepare presentation for client meeting"
      ],
      category: "Work"
    },
    {
      todolistName: "Personal Goals",
      tasks: [
        "Read 20 pages of a book",
        "Work out for 30 minutes",
        "Meditate for 10 minutes",
        "Learn a new skill online",
        "Organize office desk"
      ],
      category: "Personal"
    },
    {
      todolistName: "Shopping List",
      tasks: [
        "Buy groceries",
        "Purchase new laptop",
        "Get a birthday gift for a friend",
        "Stock up on toiletries",
        "Order new phone case"
      ],
      category: "Shopping"
    },
    {
      todolistName: "Home Improvement",
      tasks: [
        "Paint the living room",
        "Fix leaky faucet",
        "Clean out garage",
        "Install new light fixtures",
        "Mow the lawn"
      ],
      category: "Home"
    },
    {
      todolistName: "Health & Wellness",
      tasks: [
        "Book dentist appointment",
        "Schedule annual physical exam",
        "Join a local yoga class",
        "Plan balanced meal for the week",
        "Track daily water intake"
      ],
      category: "Health"
    },
    {
      todolistName: "Travel Plans",
      tasks: [
        "Plan weekend getaway",
        "Book flight tickets",
        "Reserve hotel accommodations",
        "Create a packing list",
        "Research local attractions"
      ],
      category: "Travel"
    }
  ];
//------

//Notes
const listItems = Array(8).fill(<ListItem />); 

//----
//Options Menu
const OptionsMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div style={{ position: "relative" }}>
        {/* Menu Button */}
        <IconButton onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
  
        {/* Options Menu */}
        {isMenuOpen && (
          <div
            className="options"
            style={{
              position: "absolute",
              top: "100%",  // Positioning below the menu button
              left: 0,
              zIndex: 1000,  // Ensure it appears on top of other elements
              backgroundColor: "#f0f0f0",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant='caption' style={{ display: "flex", alignItems: "center", cursor: "pointer", marginBottom: "5px" }}>
              <LaunchIcon style={{ marginRight: "5px" }} />
              Open
            </Typography>
            <hr></hr>
            <Typography variant='caption' style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <EditIcon style={{ marginRight: "5px" }} />
              Edit Name
            </Typography>
          </div>
        )}
      </div>
    );
  };

//----------
function Lists() {
  return (
<>
    <Header></Header>
    <div className="lists">
        <div className="Dashboard" style={{margin:"2vw",display:"flex",justifyContent:"space-evenly"}}>
            <img src={AddListIcon} className="AddListIcon" alt="" style={{height:"14vh"}}/>
            <div className="Statistics" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"4vh"}} >
                <SearchBar></SearchBar>
                <div className="boxes" style={{display:"flex",alignItems:"center",gap:"2vh"}}>
                
                <div className="box" style={{background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"12vh",width:"12vw",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" />
                </div>
                <div className="text">
                    <Typography color="white" variant='h6'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
                </div>

                <div className="box" style={{background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"12vh",width:"12vw",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" />
                </div>
                <div className="text">
                    <Typography color="white" variant='h6'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
                </div>

                <div className="box" style={{background: "linear-gradient(to right, #87ECAF 73%, #87ECAF 100%, #87ECAF 94%, #87ECAF 56%)",opacity:"0.73",height:"12vh",width:"12vw",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick2} alt="" />
                </div>
                <div className="text">
                    <Typography color="white" variant='h6'>07</Typography>
                    <Typography color="white" variant='caption'>Completed<br></br>Tasks</Typography>
                </div>
                </div>

                <div className="box" style={{background: "linear-gradient(to right, #8384F8 26%, #8384F8 100%, #8384F8 100%, #8384F8 55%)",opacity:"0.77",height:"12vh",width:"12vw",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Alarm} alt="" />
                </div>
                <div className="text">
                    <Typography color="white" variant='h6'>43</Typography>
                    <Typography color="white" variant='caption'>Pending Tasks</Typography>
                </div>
                </div>

                </div>
            </div>
            <CompletionPieChart  completion={80}></CompletionPieChart>
            <MyCustomCalendar></MyCustomCalendar>
        </div>
  
        <div className="body" style={{display:"flex",margin:"5vh 0",justifyContent:"space-around"}}>
        <div className="main_content" style={{margin:"2.5vw"}}>
        
        <div className="notes_section" style={{ background: "#E6E4F0", padding: "2vw" }}>
  <div className="addNote" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1vw" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
      <DrawIcon />
      <Typography variant='body1'>Notes</Typography>
    </div>
    <img src={AddNote} alt="Add Note" style={{ height: "30px" }} />
  </div>
  <div className="notes" style={{
    display: "grid",
    gap: "1vw",
    padding: "1vw",
    gridTemplateColumns: "repeat(4, 1fr)", // Default: 4 columns
    gridAutoFlow: "row"
  }}>
    {listItems.map((item, index) => (
      <div key={index} style={{
        boxSizing: "border-box",
        padding: "1vw",
        border: "1px solid #000", // Added border for visibility
        borderRadius: "4px" // Rounded corners for a cleaner look
      }}>
        {item}
      </div>
    ))}
  </div>
</div>





        <div className="categories" >
            <Typography variant='h5' style={{margin:"5vh"}} fontWeight={600}>Categories</Typography>
            <div className="CategoryBox" style={{minWidth:"70vw",minHeight:"40vh",background:"#F7F5F5",padding:"2vw"}}>

           <div className='BoxRow' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",margin:"3vh 0"}}> 
            <div className="Subbox" style={{border:"2px solid black",height:"18vh",width:"18vw",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"2vh",padding:"1vw"}}>
            <div className='upperSection' style={{display:"flex",alignItems:"center",gap:"1vw"}}>
            <div className="tag" style={{height:"3vh",width:"3vh",borderRadius:"4px",background:"#FD71AF"}}></div>
            <Typography variant='caption'>Team Projects</Typography>
            <OptionsMenu></OptionsMenu>
            </div>
            <div className="lowerSection" style={{display:"flex",alignItems:"center",gap:"1vh"}}>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
            </div>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
            </div>
            </div>
            </div>
          
            <div className="Subbox" style={{border:"2px solid black",height:"18vh",width:"18vw",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"2vh",padding:"1vw"}}>
            <div className='upperSection' style={{display:"flex",alignItems:"center",gap:"1vw"}}>
            <div className="tag" style={{height:"3vh",width:"3vh",borderRadius:"4px",background:"#FD71AF"}}></div>
            <Typography variant='caption'>Team Projects</Typography>
            <OptionsMenu></OptionsMenu>
            </div>
            <div className="lowerSection" style={{display:"flex",alignItems:"center",gap:"1vh"}}>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
            </div>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
            </div>
            </div>
            </div>

            <div className="Subbox" style={{border:"2px solid black",height:"18vh",width:"18vw",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"2vh",padding:"1vw"}}>
            <div className='upperSection' style={{display:"flex",alignItems:"center",gap:"1vw"}}>
            <div className="tag" style={{height:"3vh",width:"3vh",borderRadius:"4px",background:"#FD71AF"}}></div>
            <Typography variant='caption'>Team Projects</Typography>
            <OptionsMenu></OptionsMenu>
            </div>
            <div className="lowerSection" style={{display:"flex",alignItems:"center",gap:"1vh"}}>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
            </div>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
            </div>
            </div>
            </div>
            </div>

            <div className='BoxRow' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",margin:"3vh 0"}}> 
            <div className="Subbox" style={{border:"2px solid black",height:"18vh",width:"18vw",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"2vh",padding:"1vw"}}>
            <div className='upperSection' style={{display:"flex",alignItems:"center",gap:"1vw"}}>
            <div className="tag" style={{height:"3vh",width:"3vh",borderRadius:"4px",background:"#FD71AF"}}></div>
            <Typography variant='caption'>Team Projects</Typography>
            <OptionsMenu></OptionsMenu>
            </div>
            <div className="lowerSection" style={{display:"flex",alignItems:"center",gap:"1vh"}}>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
            </div>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
            </div>
            </div>
            </div>

            <div className="Subbox" style={{border:"2px solid black",height:"18vh",width:"18vw",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"2vh",padding:"1vw"}}>
            <div className='upperSection' style={{display:"flex",alignItems:"center",gap:"1vw"}}>
            <div className="tag" style={{height:"3vh",width:"3vh",borderRadius:"4px",background:"#FD71AF"}}></div>
            <Typography variant='caption'>Team Projects</Typography>
            <OptionsMenu></OptionsMenu>
            </div>
            <div className="lowerSection" style={{display:"flex",alignItems:"center",gap:"1vh"}}>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
            </div>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
            </div>
            </div>
            </div>

            <div className="Subbox" style={{border:"2px solid black",height:"18vh",width:"18vw",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"2vh",padding:"1vw"}}>
            <div className='upperSection' style={{display:"flex",alignItems:"center",gap:"1vw"}}>
            <div className="tag" style={{height:"3vh",width:"3vh",borderRadius:"4px",background:"#FD71AF"}}></div>
            <Typography variant='caption'>Team Projects</Typography>
            <OptionsMenu></OptionsMenu>
            </div>
            <div className="lowerSection" style={{display:"flex",alignItems:"center",gap:"1vh"}}>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #FB958D 65%, #FB958D 100%, #F8B0A9 94%, #F8B0A9 75%)",opacity:"0.58",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={ListIcon} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1550</Typography>
                    <Typography color="white" variant='caption'>Total Lists</Typography>
                </div>
            </div>
            <div className="box" style={{padding:"0.5vw",background: "linear-gradient(to right, #96C9D1 60%, #ADDCE3 100%, #F8B0A9 72%, #F8B0A9 100%)",opacity:"0.81",height:"6vh",width:"6vw",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <div className="icon" style={{background:"white",borderRadius:"50%",height:"25px",width:"25px",display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img src={Tick1} alt="" style={{height:"15px",width:"15px"}} />
                </div>
                <div className="text" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography color="white" variant='p'>1220</Typography>
                    <Typography color="white" variant='caption'>Total Tasks</Typography>
                </div>
            </div>
            </div>
            </div>
            </div>

            </div>

     </div>

        <div className="templates">
      <Typography variant='h5' sx={{ margin: '5vh', fontWeight: 600 }}>
        Templates
      </Typography>
      <Box
        sx={{
          display: 'flex',
          background:"#F7F5F5",
          padding:"3vh 0",
          justifyContent:"space-evenly",
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {todoLists.map((list, index) => (
          <TodoListTemplate
            key={index}
            todolistName={list.todolistName}
            tasks={list.tasks}
            category={list.category}
          />
        ))}
      </Box>
        </div>

        <div className="toDoLists" >
        <Typography variant='h5' sx={{ margin: '5vh', fontWeight: 600 }}>
        To Do Lists
      </Typography>
      <div className="list_section">
        <TodoList todolistName={todoLists[0].todolistName}
            tasks={todoLists[0].tasks}
            category={todoLists[0].category}></TodoList>
      </div>
        </div>

        </div>
        </div>
    </div>
    <Footer></Footer>
</>
)
}

export default Lists