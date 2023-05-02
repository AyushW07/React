import React, { useEffect, useState } from "react";
import "./dogImage.css";

export default function DogImage() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message));
  }, []);

  return <img src={image} alt="Dog Image" className="image" />;
}
