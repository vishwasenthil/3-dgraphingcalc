import "./css/SidebarStyles.css"
import React, { useState, useEffect, useRef } from 'react';
import { clearMesh, recreateMesh } from "./Graph"
import KeyPadComponent from "./KeyPadComponent";
import { DisplayPassPostProcess } from "@babylonjs/core";

function Sidebar(props) {

    
    let inputRef = useRef([]);
    const [result, setResult] = useState([``]);
    const [theme, setTheme] = useState('light');
    let [lastFocused, setLastFocused] = useState(0);
    let colorRef = useRef();

    let sidebarStyle = {
        height: "100%",
        width: "100%",
        border: `3px solid black`,
        position: `relative`
    };
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

    //create array for input fields

    let inputArr = [
        {
            id: 0,
        }
    ];

    let [arr, setArr] = useState(inputArr);

    function handleInput(e) {
        let r = [...result];
        r[e.target.id] = e.target.value;

        setResult(r); //sets result/value of textbox to updated version
        recreateMesh(e.target.value, e.target.id, colorRef.current.value);
    }

   


    let onClick = button => {
        if (button === "C") {
            reset()
        }
        else if (button === "DEL") {
            backspace()
        }
        else {
            let r2 = [...result]; //[...result] instead of result
            r2[lastFocused] = r2[lastFocused]+button;
            console.log(r2[lastFocused]);
            setResult(r2);
            recreateMesh(r2[lastFocused], lastFocused,colorRef.current.value); //changed parameters
        }
    };
    let reset = () => {
        var r2 = [...result];
        for (let i = 0; i < r2.length; i++) {
            r2[i] = ``;
        }
        clearMesh(result.length);
        setResult(
            r2
        )

        console.log(result);
        for (let i = 0; i < r2.length; i++) {
            recreateMesh(r2[i], i, colorRef.current.value);
        }
    };

    let backspace = () => {
        let r2 = [...result];
        if (r2[lastFocused] !== "") {
            r2[lastFocused] = r2[lastFocused].slice(0, -1);
            setResult(
                r2
            )
        }
        recreateMesh(r2[lastFocused], lastFocused);
    };
    function addInputField(e) {
        console.log(e.key);
        if (e.key === "Enter") {
            setArr(arr => {
                return (
                    [...arr,
                    { id: arr.length + 1 }
                    ]
                );
            });
            console.log(result);
            let r = [...result, ``];
            setResult(r);
        }
        return;
    }
    return (
        <div className="add-scroll" style={{ height: "100vh", gridColumn: "1/2", gridRow: `1/2` }}>
            <aside style={sidebarStyle}>
                {
                    arr.map((input, index) => {
                        return (
                            <div>
                                <input key={index} ref={inputRef} onFocus={(()=>setLastFocused(index))} onInput={handleInput} value={result[index]} onKeyDown={addInputField} id={index} type="text" autoFocus style={{ width: `100%`, boxSizing: `border-box` }} />
                                <input onChange={e=>{
                                    recreateMesh(result[index], e.target.id, e.target.value)
                                    console.log(e.target.value)
                                }} type="color" ref={colorRef} id={index}/>
                            </div>
                        );
                    })

                }
                <KeyPadComponent onClick={onClick} />
            </aside>
            <button onClick={toggleTheme} style={{ position: `relative`, left: `1000`, top: `1000` }}> Change Light Mode </button>
        </div>

    );
}

export default Sidebar;