import { useState } from "react"

function Count() {
    const [count, setCount] = useState(0);

    function incHandler() {
        setCount(count + 1)
    }

    function decHandler() {
        setCount(count - 1)
    }
    return (
        <div className="container">
            <button onClick={incHandler}>+</button>
            <h2>{count}</h2>
            <button onClick={decHandler} >-</button>
        </div>
    )
}

export default Count