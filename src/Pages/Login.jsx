import "../Styles/Login.scss";
import BackgroundImg from "../assets/Bg.png"
import Email from "../assets/email.png";
import Bag from "../assets/bag.png";
import MobileBg from "../assets/mobile_bg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemembered, setIsRemembered] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here, e.g., send login request to server
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', isRemembered);
    };

    const handleRememberChange = (event) => {
        setIsRemembered(event.target.checked);
    };
    return (
        <div className="Login">
            <div className="mobileimg">
                <img src={MobileBg} alt="" />
            </div>
            <div className="left">
                <img src={BackgroundImg} alt="" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Login</h1>
                    <p>Let us take the responsibility of organizing your life. </p>

                    <form onSubmit={handleSubmit} >

                        <div className="login-email inputDiv" id="login-email" >
                            <img src={Email} alt="" />
                            <div className="inputs">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={email}
                                    onChange={
                                        (e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email"
                                    required />
                            </div>
                        </div>
                        <div className="login-password inputDiv"
                            id="login-password" >
                            <img src={Bag} alt="" />
                            <div className="inputs">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={
                                        (e) => setPassword(e.target.value)}
                                    placeholder="**********"
                                    required />
                            </div>
                        </div>

                        <div className="login-remember-forgot checkDiv"
                            id="login-remember-forgot" >

                            <div className="login-remember"
                                id="login-remember" >
                                <input type="checkbox"
                                    id="remember-me"
                                    checked={isRemembered}
                                    onChange={handleRememberChange}
                                />
                                <label htmlFor="remember-me" > Remember me </label>
                            </div>
                            <div className="login-forgot"
                                id="login-forgot" >
                                <a href="#" > Forgot Password ? </a>
                            </div>
                        </div>

                        <div className="login-submit"
                            id="login-submit" >
                            <button type="submit" > Login </button> </div>
                    </form>
                    
                    <p className="lastPara">Don't have an account? <Link to={"/Signup"}>Create an account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login