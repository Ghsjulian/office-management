import React from "react";
import { NavLink } from "react-router-dom";
/*<----ICONS---->*/
import home1 from "../icons/home1.png";
import user from "../icons/user.png";
import messenger from "../icons/messenger.png";
import notification from "../icons/notification.png";
//import cancel from "../icons/cancel.png";
import option from "../icons/option.png";
import analytics from "../icons/analytics.png";
import boy from "../icons/boy.png";
import notes from "../icons/notes.png";
import email1 from "../icons/email1.png";
import lightbulb from "../icons/lightbulb.png";
import category from "../icons/category.png";
import letter from "../icons/letter.png";
import goal from "../icons/goal.png";
import information from "../icons/information.png";
import call from "../icons/call.png";
import settings1 from "../icons/settings1.png";
import login from "../icons/login.png";


function ghs__(tag) {
    return document.querySelector(tag)
}
const Header = () => {
    const Menu = (e) => {
        var sidebar = ghs__(".side-bar");
        sidebar.classList.toggle("mobile-nav")
    }
    return (
        <div>
            <div className="header">
                <NavLink to="/">
                    <img src={home1} alt="home" />
                </NavLink>
                <NavLink to="/profile">
                    <img src={user} alt="home" />
                </NavLink>
                <NavLink to="/messenger">
                    <img src={messenger} alt="home" />
                </NavLink>
                <NavLink to="/notification">
                    <img src={notification} alt="home" />
                </NavLink>
                <span id="menu">
                    <img onClick={(e) => { Menu(e) }} src={option} alt="home" />
                </span>
                <NavLink to="" id="profile">
                    <img onClick={Menu} src={option} alt="home" />
                </NavLink>
            </div>
            {/*=====SIDE MENU BAR=====*/}
            <div class="side-bar" id="sidebar" open="NO">
                <h2>Menu</h2>
                <li>
                    <NavLink to="/">
                        <img src={analytics} alt="home" />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={boy} alt="home" />
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={notes} alt="home" />Notes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={email1} alt="home" />Email
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={lightbulb} alt="home" />
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={category} alt="home" />Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={letter} alt="home" /> Write File
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={goal} alt="home" />
                        Report Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={information} alt="home" />
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={call} alt="home" />
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={settings1} alt="home" />Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={login} alt="home" />Logout
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default Header;
