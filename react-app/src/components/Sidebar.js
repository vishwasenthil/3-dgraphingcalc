import "./css/SidebarStyles.css"
import React, { useState, useEffect } from 'react';

function Sidebar() {
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
                
            </aside>
            <button onClick={toggleTheme} style={{position:`relative`, left:`1000`, top:`1000`}}> Change Light Mode </button>
        </div>
        
    );
}

export default Sidebar;