import React, { useRef, useState } from 'react'
import './image.css'

export default function ImageComponent() {

    const [image, setImage] = useState('https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600');
    const buttonRef = useRef(null);

    const handleClick = () => {
        const images = [
            "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&w=400"
        ];

        const currentImage = image;
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];

        setImage(nextImage);
    }


  return (
    <div>
        <img src = {image} alt = "placeholder" className='images'/><br></br>
        <button onClick={handleClick} ref={buttonRef} className='button'>CHANGE</button>
    </div>
  )
}
