import "./css/SidebarStyles.css"
import React, { useState, useEffect } from 'react';
import {recreateMesh} from "./Graph"
import KeyPadComponent from "./KeyPadComponent";

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
                
    function handleInput(e) {
        setResult(e.target.value); //sets result/value of textbox to updated version
        recreateMesh(e.target.value, e.target.id);
    }


    const [result, setResult] = useState(``);
    let onClick = button => {
        if(button === "C"){
            reset()
        }
        else if(button === "DEL"){
            backspace()
        }
        else {
            var r2 = result + button; //fix to previous issue w/ accessing updated result value, using an extra variable
            setResult(
                r2
            )
            recreateMesh(r2, 10);
        }
    };
let reset = () => {
            var r2 = "";
            setResult(
                r2
            )
            recreateMesh(r2, 10);
        };
    
        let backspace = () => {
            if (result !== "") {
                var r2 = result.slice(0, -1);
                setResult(
                    r2
                )
            }
            recreateMesh(r2, 10);
        };
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
                                <input onInput={handleInput} value={result} onKeyDown={addInputField} id={index} type="text" style={{ width:`100%`, boxSizing:`border-box`}}/>
                            </div>
                        );
                    })
            
                }
                <KeyPadComponent onClick={onClick}/>
            </aside>
            <button onClick={toggleTheme} style={{position:`relative`, left:`0`, top:`0`}}> Change Light Mode </button>
        </div>
        
    );
}

export default Sidebar;