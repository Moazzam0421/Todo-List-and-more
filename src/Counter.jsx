import { useState, useEffect } from "react";

// let func = (() => {
//     count += 1;
//     return (count)
// })
// let count = 0;

export default function Counter() {
    const [numberX, setNumberX] = useState(0);
    const [numberY, setNumberY] = useState(0);


    useEffect(function printSomething() {
        console.log("this is side effect")
    },[])

    return (
        <div className="m-5">
            <span style={{ fontSize: "30px", fontWeight: "bold", border: "2px solid black", margin: "10px", padding: "10px 20px", borderRadius: "20px" }}>{numberX}</span>

            <button style={{ backgroundColor: "black", color: "white" }} onClick={() => {
                setNumberX(numberX - 1);

            }}>Decrease - 1</button>

            &nbsp; &nbsp;
            <span style={{ fontSize: "30px", fontWeight: "bold", border: "2px solid black", margin: "10px", padding: "10px 20px", borderRadius: "20px" }}>{numberY}</span>
            &nbsp; &nbsp;

            <button style={{ backgroundColor: "black", color: "white" }} onClick={() => {
                setNumberY(numberY + 1);

            }}>Increase + 1</button>
        </div>
    )
}