import "../Styles/EditProfile.scss"
import avatar from "../assets/avatar.png"
const EditProfilePage = () => {
  return (
    <div className='profilePage'>
      <div className="wrapper">
        <h1>Account setting</h1>
        <div className="accountSetting">

          <div className="avatar">
            <img src={avatar} alt="avatar" />
            <p>Image size should be under 1MB and image ration needs to be 1:1</p>
          </div>

          <div className="accountForm">
            <form>
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
        <div className="changePassword">

        </div>

        <div className="imgContainer">

        </div>

      </div>
    </div>
  )
}

export default EditProfilePage
