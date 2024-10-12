import "../Styles/Login.scss";
import BackgroundImg from "../assets/Bg.png";
import Email from "../assets/email.png";
import Bag from "../assets/bag.png";
import MobileBg from "../assets/mobile_bg.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Use the AuthContext for login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembered, setIsRemembered] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { isAuthenticated, login } = useAuth();

 
  // Handle form submit and login
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password); // Call the login function from the AuthContext
      navigate('/', { replace: true });
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  
  return (
    <div className="Login" style={{ overflow: "hidden" }}>
      <div className="mobileimg">
        <img src={MobileBg} alt="" />
      </div>
      <div className="left">
        <img src={BackgroundImg} alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Login</h1>
          <p>Let us take the responsibility of organizing your life.</p>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="login-email inputDiv" id="login-email">
              <img src={Email} alt="" />
              <div className="inputs">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                />
              </div>
            </div>
            <div className="login-password inputDiv" id="login-password">
              <img src={Bag} alt="" />
              <div className="inputs">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="**********"
                  required
                />
              </div>
            </div>

            <div className="login-remember-forgot checkDiv" id="login-remember-forgot">
              <div className="login-remember" id="login-remember">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={isRemembered}
                  onChange={(e) => setIsRemembered(e.target.checked)}
                />
                <label htmlFor="remember-me"> Remember me </label>
              </div>
              <div className="login-forgot" id="login-forgot">
                <a href="#"> Forgot Password? </a>
              </div>
            </div>

            <div className="login-submit" id="login-submit">
              <button type="submit">Login</button>
            </div>
          </form>
          <p className="lastPara">Don't have an account? <Link to={"/Signup"}>Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
