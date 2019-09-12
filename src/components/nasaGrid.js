import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./nasaCard"

function NasaGrid(){

const [date, setDate] = useState("");
const [title, setTitle] = useState("");
const [hdurl, setHdurl] = useState("");
const [explanation, setDesc] = useState("");
const [copyright, setCredit] = useState("");
    
useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response =>{
            setDate(response.data.date);
            setTitle(response.data.title);
            setHdurl(response.data.hdurl);
            setDesc(response.data.explanation);
            setCredit(response.data.copyright);
        })

        .catch(error =>{
            console.log("woops", error)
        })
    },[])

    return(
        <div className = "picture">
            <NasaCard 
            key = {date}
            title = {title}
            date = {date}
            hdurl = {hdurl}
            explanation = {explanation}
            copyright = {copyright} />
        </div>
    );
}

export default NasaGrid;