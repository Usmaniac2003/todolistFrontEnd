import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
const TrashList = () => {
  return (
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
  )
}

export default TrashList