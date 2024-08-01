import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
const PinnerList = () => {
  return (
    <div className='PinnedList'>
        <div className="top">
            <SearchBar/>
        </div>

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
  )
}

export default PinnerList