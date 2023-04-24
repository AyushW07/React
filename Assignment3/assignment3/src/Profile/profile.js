import React from "react";
import "./profile.css"

const Profile = (props) => {
    const {name, designation, description} = props;

        const seeMore = () => {
            alert(name);
        }

    return(
        <div className="card">
            <img src = {props.image} alt = {props.name} className="image"/>
            <div className="info">
                <h2>{name}</h2>
                <h3>{designation}</h3>
                <p>{description}</p>
                <button onClick={seeMore}>See More</button>
            </div>
        </div>  
    );
}

export default Profile
