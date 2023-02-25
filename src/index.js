// Author: NobleDot

import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react"; 

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {MainOkay, SingleDog} from '../src/components/index'
import {Roster} from '../src/components/index'

// This main App mostly fetches data and stores it.
const App = () => {
    const [puppies, setPuppies] = useState([]);
    const [newPuppyName, setNewPuppyName] = useState("");
    const [newPuppyBreed, setNewPuppyBreed] = useState(""); 

    async function fetchPuppyData() {
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players');
            const translatedData = await response.json(); 
            setPuppies(translatedData.data.players)
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        fetchPuppyData(); 
    }, [])

    async function sendNewPuppyRequest(event) {
        event.preventDefault(); 

        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: newPuppyName,
                    breed: newPuppyBreed
                })
            });       
            const translatedData = await response.json(); 
            console.log(translatedData); 
            setPuppies([...puppies, translatedData.data.newPlayer])

        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dog" element={<MainOkay something={puppies}/>} />
                <Route path="/dog/:id" element={<SingleDog dogData={puppies}/>} />
            </Routes>
        </BrowserRouter>
    )
}

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />)