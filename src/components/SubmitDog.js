import React from 'react';
import { useState, useEffect } from 'react';

// I don't really use this code, and despite it being "fluff", we might
// do stuff like this in the future so I'm leavin' all this here
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

const SubmitDog = () => {
    return (
        <div className = "name-container">
                <form onSubmit={sendNewPuppyRequest}>
                    <input type="text" placeholder="New Puppy Name Here" onChange={(event) => {
                        setNewPuppyName(event.target.value)
                    }}></input>
    
                    <input type="text" placeholder="New Puppy Breed Here" onChange={(event) => {
                        setNewPuppyBreed(event.target.value)
                    }}></input>
    
                    <button type="submit">Submit</button>
                </form>
        </div>
    );
}

export default SubmitDog;