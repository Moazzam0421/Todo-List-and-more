import { useEffect, useState } from "react";

export default function Jokes(){
    const [joke, setJoke]= useState({});

    const URL ="https://official-joke-api.appspot.com/random_joke";

    const getJokes= async ()=>{
        let response = await fetch(URL);
        let jsonResponse= await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }

    useEffect(()=>{
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResponse= await response.json();
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    }, [])
    return (
        <div className="d-block align-items-center justify-content-center ">
            <h1 className="border border-3 rounded-dark p-4 mb-5">jokes</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button className="btn " onClick={getJokes}>Get Jokes</button>
        </div>
    )
}