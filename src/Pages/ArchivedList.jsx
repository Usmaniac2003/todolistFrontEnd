import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Typography, useMediaQuery } from "@mui/material"

const ArchiveList = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
<Header></Header>
    <div className='PinnedList' style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"5vw"}}>
        <Typography variant= {isMobile?"h6":"h4"} fontWeight={600} marginTop={"4vh"}>Archived Lists</Typography>
        <SearchBar/>
        

        <div className="listItems">
            <ListItem actionName={"Unpin List"}/>
            <ListItem actionName={"Unpin List"}/>
            <ListItem actionName={"Unpin List"}/>
            <ListItem actionName={"Unpin List"}/>

            <ListItem actionName={"Unpin List"}/>
            <ListItem actionName={"Unpin List"}/>
            <ListItem actionName={"Unpin List"}/>
            <ListItem actionName={"Unpin List"}/>


        </div>
    </div>
    <Footer></Footer>
    </>
  )

}

export default ArchiveList