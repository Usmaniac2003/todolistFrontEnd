import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AddListIcon  from "../assets/AddListIcon.png"
import SearchBar from '../Components/SearchBar'
import  ListIcon from "../assets/list.png"
import Tick1 from "../assets/tick1.png"
import Tick2 from "../assets/tick2.png"
import Alarm from "../assets/alarm.png"
import { Typography } from '@mui/material'
import CompletionPieChart from '../Components/PieChart'
import MyCustomCalendar from '../Components/Calendar'
import ListItem from '../Components/ListItem'
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
        <ListItem></ListItem>
    </div>
    <Footer></Footer>
</>
)
}

export default Lists