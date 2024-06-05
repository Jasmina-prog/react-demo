import { useState } from "react";

function Practice () {
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1)
    }
    const decreament = () =>{
        setCount(count - 1)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>increment +</button>
        <button onClick={decreament}>decreament -</button>
        </>
    )
}

export default Practice