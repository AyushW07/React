import { useState } from "react";
import './form.css'

export default function Form({luckyNumber}) {
    const [guess, setGuess] = useState("");
    const [count, setCount] = useState(1)

    
    function handleOnChange(event) {
        setGuess(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        setCount(count + 1);
        if(guess < luckyNumber){
            alert("You guessed a smaller number.")
        }else if (guess > luckyNumber){
            alert("You guessed a bigger number.")
        }else{
            alert(`Congratulation, you guessed the lucky number in ${count} attempts.`);
        }
        setGuess("")
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input
                type = "number"
                placeholder="Guess a Number"
                value = {guess}
                onChange={handleOnChange}
                required
                className="input"
            />
            <button type="submit" className="button">Guess</button>
        </form>
    )
}