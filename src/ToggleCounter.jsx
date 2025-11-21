import './Toggler.css';
import {useState } from "react";

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    // const toggleIsHappy = () => setIsHappy(!isHappy);
    const [count, setCount] = useState(0);

    const handleToggle = () =>{
        setIsHappy(!isHappy)
        setCount(count+1)
    }

    return( 
    <div>
        <button className='Toggler' onClick={handleToggle}>
            {isHappy ? '😀' : '😔' }
        </button>

        <p>{count}</p>
    </div>
    )
};