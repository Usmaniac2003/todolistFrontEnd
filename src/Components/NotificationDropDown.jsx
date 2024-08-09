import "../Styles/NotificationDropDown.scss"
import Triangle from "../assets/triangle.png"
import Noti from "../assets/Noti.png";
const NotificationDropDown = () => {
  return (
    <div className="Dropdown">

        <img src={Triangle} alt="" />

        <div className="notifications">

            <div className="top">
                <p>Notifications</p>
                <p className="num">2</p>
            </div>

            <div className="type">
                <p>New</p>
                <p className="num">
                    2
                </p>
            </div>

            <div className="item">
                <div className="info">
                    <img src={Noti} alt="" />
                    <p>Practice Coding ALERT</p>
                    <p className="time">3h</p>
                </div>
                <p className="desc">Your tasks are due today</p>
                <button>Dismiss</button>
            </div>

            <div className="item">
                <div className="info">
                    <img src={Noti} alt="" />
                    <p>Homework List REMINDER</p>
                    <p className="time">8h</p>
                </div>
                <p className="desc">Your tasks are due soon complete them now</p>
                <button>Dismiss</button>
            </div>

            <div className="type">
                <p>SEEN</p>
            </div>

            <div className="item">
                <div className="info">
                    <img src={Noti} alt="" />
                    <p>Work Goals ALERT</p>
                    <p className="time">1d</p>
                </div>
                <p className="desc">Your tasks are due today</p>
                <button>Dismiss</button>
            </div>
        </div>
    </div>
  )
}

export default NotificationDropDown