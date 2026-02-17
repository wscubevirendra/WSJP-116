import React, { useState } from 'react'

function Input() {
    const [toggle, setToggle] = useState(true);

    function toggleHandler() {
        setToggle(!toggle)
    }
    return (
        <div>
            <input type={toggle ? "password" : "text"} />
            <button onClick={toggleHandler}>{toggle ? "Show" : "Hide"}</button>
        </div>
    )
}


export default Input