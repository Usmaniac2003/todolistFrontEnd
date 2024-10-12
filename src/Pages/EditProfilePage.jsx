import "../Styles/EditProfile.scss";
import avatar from "../assets/avatar.png";
import SettingIcon from "../assets/SettingIcon.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const EditProfilePage = () => {
  const { logout } = useAuth(); // Use the logout function from AuthContext

  return (
    <>
      <Header />
      <div className='profilePage'>
        <h1>Account setting</h1>
        <div className="mynewrapper">
          <div className="accountSetting">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
              <p>Image size should be under 1MB and image ratio needs to be 1:1</p>
            </div>

            <div className="accountForm">
              <form className="accountInfo">
                <div className="formItem">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Enter your full name" />
                </div>

                <div className="formItem">
                  <label htmlFor="Username">Username</label>
                  <input type="text" id="Username" name="Username" required placeholder="Enter your Username" />
                </div>

                <div className="formItem">
                  <label htmlFor="Email">Email</label>
                  <input type="text" id="Email" name="Email" required placeholder="Email address" />
                </div>

                <div className="formItem">
                  <div className="buttons">
                    <button className="save" type="submit">
                      Save Changes
                    </button>

                    <button className="cancel">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom">
          <h1>Change password</h1>
          <div className="mywrapper">
            <div className="changePassword">
              <form>
                <div className="formItem">
                  <label htmlFor="currPass">Current Password</label>
                  <input type="password" id="currPass" name="currPass" required placeholder="Password" />
                </div>

                <div className="formItem">
                  <label htmlFor="newPass">New Password</label>
                  <input type="password" id="newPass" name="newPass" required placeholder="Password" />
                </div>

                <div className="formItem">
                  <label htmlFor="confPass">Confirm Password</label>
                  <input type="password" id="confPass" name="confPass" required placeholder="Confirm new password" />
                </div>

                <div className="formItem">
                  <div className="buttons">
                    <button className="save" type="submit">
                      Change Password
                    </button>

                    <button className="cancel">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="imgContainer">
              <img src={SettingIcon} alt="settings icon" />
            </div>
          </div>
        </div>

        {/* Log Out button at the bottom of the page */}
        <div className="logoutWrapper">
          <button className="logoutButton" onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePage;
