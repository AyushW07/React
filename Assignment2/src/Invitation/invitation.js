import React from "react";

const Invitation = ({subject, to, name, party, friends, location}) => {
    return (
        <div>
            <h3>Subject : {subject}</h3>
            <p>To : {to}</p>
            <p>Hi, {name}</p>
            <p>
                I am having a {party} next Friday at my home. Would you like to come? It will be fun. Lots of people from my school are coming, you know some of them - {friends.join(', ')}.
            </p>
            <p>
                My house is behind our school, near {location}.
            </p>
            <p>
                I hope you will come and see you soon.
            </p>
            <p>
                from <br></br>{name}
            </p>
        </div>
    )
}

export default Invitation;