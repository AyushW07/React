import React, { useEffect, useState } from "react";
import axios from "axios";
import './DogImage.css'

export default function DogImage(){
    const [image, setImage] = useState("")

    useEffect(() => {
        fetchDogImage();
    },[]);

    const fetchDogImage = () => {
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {setImage(response.data.message);
        })
        .catch((error) => {console.log(error);
        });
    }
    
    return(
        <div>
            <h1>Dog Image</h1>
            <img src={image} alt="Dog Image" className="image"/><pre></pre>
            <button onClick={fetchDogImage} className="button">Change</button>

        </div>
    )
}