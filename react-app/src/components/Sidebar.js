import React, {useState} from "react";
import "./css/SidebarStyles.css"
import React, { useState, useEffect } from 'react';
import {recreateMesh} from "./Graph"

function Sidebar(props) {

    //create array for input fields

    let inputArr = [
        {
            id:0,
        }
    ];

    let [arr, setArr] = useState(inputArr);
    
    let sidebarStyle = {
        height:"100%",
        width:"100%",
        border:`3px solid black`,
        position:`relative`
    };

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return(
        <div style={{height:"100vh", gridColumn:"1/2", gridRow:`1/2`}}>
            <aside style={sidebarStyle}>
                <input type="text" style={{position:`absolute`, left:`0`, top:`0`, width:`100%`, boxSizing:`border-box`}}/>
                
    function handleChange(e) {
        recreateMesh(e.target.value, 0);
    }
    function addInputField(e) {
        console.log(e.key);
        if(e.key === "Enter") {
            setArr(arr=>{
                return(
                    [...arr,
                        {id:arr.length+1}
                    ]
                );
            });
            console.log(arr.length);
        }
        return;
    }
    return(
        <div style={{height:"100vh", gridColumn:"1/2", gridRow:`1/2`}}>
            <aside style={sidebarStyle}>
                {
                    arr.map((input, index)=>{
                        return(
                            <div>
                                <input onChange={handleChange} onKeyDown={addInputField} id={index} type="text" style={{ width:`100%`, boxSizing:`border-box`}}/>
                            </div>
                        );
                    })
                }
            </aside>
            <button onClick={toggleTheme} style={{position:`relative`, left:`1000`, top:`1000`}}> Change Light Mode </button>
        </div>
        
    );
}

export default Sidebar;