import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
const ArchiveList = () => {
  return (
    <>
<Header></Header>
<div className='PinnedList'>
        <div className="top">
            <SearchBar/>
        </div>

        <div className="listItems">
            <ListItem actionName={"Unarchive"}/>
            <ListItem actionName={"Unarchive"}/>
            <ListItem actionName={"Unarchive"}/>
            <ListItem actionName={"Unarchive"}/>

            <ListItem actionName={"Unarchive"}/>
            <ListItem actionName={"Unarchive"}/>
            <ListItem actionName={"Unarchive"}/>
            <ListItem actionName={"Unarchive"}/>


        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default ArchiveList