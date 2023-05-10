import React, { useState, useEffect } from 'react';

function toggleBar(){
    
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    

    return (
        <button onClick={toggleTheme} style={{position:`relative`, left:`0`, top:`0`}}> Toggle Sidebar </button>
    );
}

export default toggleBar;
