import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const Roster = (props) => {

    const { dogData } = props;

    // Loop through the data and populates the HTML.
    return (
        <div>
            <div className = "roster-container">
                {dogData.length ? 
                props.dogData.map(dog => { 
                    console.log(dog.id)
                    return (
                            <div className = "dog-container" key={dog.id}>
                                <div className= "dog-id">
                                    <p className="dog-title">{dog.name}</p>
                                    <p className="dog-id-number">#{dog.id}</p>
                                </div>
                                
                                <img style={{ width: "22vh"}} src={dog.imageUrl}></img>
                
                                <div className= "dog-options">
                                    <Link to={`/dog/${dog.id}`} >
                                        Details!
                                    </Link>
                                    <button>Delete </button>
                                </div>
                            </div>
                    );
                })
                : <div> Data isn't here.</div> }
            </div>
        </div>
    )
}

export default Roster;
