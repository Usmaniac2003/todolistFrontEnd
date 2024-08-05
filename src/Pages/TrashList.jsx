import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
const TrashList = () => {
  return (
    <>
<Header></Header>
    <div className='PinnedList'>
        <div className="top">
            <SearchBar/>
        </div>

        <div className="listItems">
            <ListItem actionName={"Restore List"}/>
            <ListItem actionName={"Restore List"}/>
            <ListItem actionName={"Restore List"}/>
            <ListItem actionName={"Restore List"}/>

            <ListItem actionName={"Restore List"}/>
            <ListItem actionName={"Restore List"}/>
            <ListItem actionName={"Restore List"}/>
            <ListItem actionName={"Restore List"}/>


        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default TrashList