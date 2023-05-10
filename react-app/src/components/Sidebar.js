import "./css/SidebarStyles.css"
import React, { useState, useEffect } from 'react';

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

    const [isOpen, barIsOpen] = useState(false);
    const toggleSidebar = () => {
        barIsOpen(!isOpen);
    }
    
    
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
                {
                    arr.map((input, index)=>{
                        return(
                            <div>
                                <input id={index} type="text" style={{ width:`100%`, boxSizing:`border-box`}}/>
                            </div>
                        );
                    })
            
                }
                
            </aside>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            {isOpen &&  <Sidebar/> }
            <button onClick={toggleTheme} style={{position:`relative`, left:`0`, top:`0`}}> Change Light Mode </button>
        </div>
    );
}

export default Sidebar;
