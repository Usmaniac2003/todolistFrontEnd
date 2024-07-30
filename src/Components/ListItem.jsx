import "../Styles/ListItem.scss"
import DownArrow from "../assets/DownArrow.png"
import RightArrow from "../assets/RightArrow.png"
const ListItem = ({ actionName }) => {
    return (
        <div className="ListItem">

            <div className="top">
                <p>abc</p>
                <img src={DownArrow} alt="" />
            </div>

            <div className="bottom">

                <div className="type">
                    <p>Tech</p>
                </div>

                <div className="info">
                    <p><span>Deadline: </span>30 June, 2024 </p>
                    <img src={RightArrow} alt="" />

                </div>

                <div className="action">
                    <input name="action" className="customCheck" type="checkbox" />
                    <label htmlFor="action">{actionName}</label>
                </div>


            </div>


        </div>
    )
}

export default ListItem