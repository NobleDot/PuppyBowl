import React from 'react';
import {useState, useEffect } from "react";
import { SubmitDog, Roster } from './index'

const MainOkay = (props) => {
    return (
        <div className="main">
            <h1> Puppy Bowl!</h1>
            <SubmitDog/>
            <Roster dogData = {props.something}/>
        </div>
    )
}

export default MainOkay;