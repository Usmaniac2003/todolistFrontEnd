import SearchBar from "../Components/SearchBar"
import "../Styles/PinnedList.scss"
import ListItem from "../Components/ListItem"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
const PinnerList = () => {
  return (
    <>
<Header></Header>
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
    <Footer></Footer>
    </>
  )
}

export default PinnerList