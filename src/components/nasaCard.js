import React from "react";

const NasaCard = props => {
    return(
        <div className="nasa-card" key={props.date}>
            <h2>{props.title}</h2>
            <img className="nasaIMG" src={props.hdurl} alt=""></img>
            <p>Credit: {props.copyright} {props.date}</p>
            <p>{props.explanation}</p>
        </div>
    )
}

export default NasaCard;