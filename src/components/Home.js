import React from 'react'

//import { Link } from 'react-router-dom'

/*====> ASSETS IMAGES <=====*/
import employee6 from "../images/employee6.jpeg";
import employee2 from "../images/employee2.jpeg";
import employee3 from "../images/employee3.jpeg";

const Home = () => {
    return (
        <div className="main" >
            <h2>Admin Dashboard</h2>
            <img id="hero" src={employee6} alt="img" />
            <div className="row">
                <div className="col">
                    <img id="hero" src={employee3} alt="img" />
                </div>
                <div className="col">
                    <img id="hero" src={employee2} alt="img" />
                </div>
            </div >
        </div >
    );
};

export default Home
