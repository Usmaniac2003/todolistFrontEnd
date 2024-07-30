import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
const ArchiveList = () => {
  return (
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
  )
}

export default ArchiveList