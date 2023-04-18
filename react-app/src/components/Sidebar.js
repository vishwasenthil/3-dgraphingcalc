import "./css/SidebarStyles.css"
import React, { useState, useEffect } from 'react';
import {recreateMesh} from "./Graph"

function Sidebar(props) {
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
        recreateMesh(e.target.value, 10);
    }
    return(
        <div style={{height:"100vh", gridColumn:"1/2", gridRow:`1/2`}}>
            <aside style={sidebarStyle}>
                <input onChange={handleChange} ref={props.element} id="textInput" type="text" style={{position:`absolute`, left:`0`, top:`0`, width:`100%`, boxSizing:`border-box`}}/>
            </aside>
            <button onClick={toggleTheme} style={{position:`relative`, left:`1000`, top:`1000`}}> Change Light Mode </button>
        </div>
        
    );
}

export default Sidebar;