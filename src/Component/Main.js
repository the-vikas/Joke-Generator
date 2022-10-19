import React, { useState } from "react";
import Axios from "axios";
import "./main.css";


function Main() {

    const [joke, setJoke] = useState("");


    const getJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
        
        setJoke(response.data.value)
        
    });
};

    return (
        <div >
            <button onClick={getJoke} className="Button">Get Jokes </button>
            <br />
           <div className="jokeShow">{joke}</div>
        </div>
        
            
        
    );
}

export default Main;