import { useState } from "react";
import "../css/Animal.css"

const imageTypeMap = {
    "bird": "/assets/bird.svg",
    "cat": "/assets/cat.svg",
    "cow": "/assets/cow.svg",
    "dog": "/assets/dog.svg",
    "gator": "/assets/gator.svg",
    "horse": "/assets/horse.svg",
    "heart": "/assets/heart.svg"
}

function Animal({type}){
    const [clicks, setClicks] = useState(0);
    function handleClick(){
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleClick} className="animal-show">
         <img className="animal" src={imageTypeMap[type]} alt="Animal"></img>
         <img
            className="heart"
            alt="Heart"
            src={imageTypeMap["heart"]}
            style={{ width: 10 + (10 * clicks) + 'px' }}
         ></img>
        </div>
    );
}

export default Animal;