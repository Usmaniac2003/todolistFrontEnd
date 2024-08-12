import "../Styles/Signup.scss"

import BackgroundImg from "../assets/Bg.png"
import Email from "../assets/email.png";
import Bag from "../assets/bag.png";
import MobileBg from "../assets/mobile_bg.png";
import Person from "../assets/person.png";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
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
                    <h1>Get Started</h1>
                    <p>Let us take the responsibility of organizing your life. </p>

                    <form onSubmit={handleSubmit} >

                        <div className="login-email inputDiv" id="login-email" >
                            <img src={Person} alt="" />
                            <div className="inputs">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={name}
                                    onChange={
                                        (e) => setName(e.target.value)}
                                    placeholder="Enter your Full Name"
                                    required />
                            </div>
                        </div>

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
                                <label htmlFor="remember-me" > I agree to the <span> Terms of Service</span> and <span> Privacy Policy</span> </label>
                            </div>
                        </div>

                        <div className="login-submit"
                            id="login-submit" >
                            <button type="submit" > Create Account</button> </div>
                    </form>
                    <p className="lastPara">Already have an account  <a href="">Sign in</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;