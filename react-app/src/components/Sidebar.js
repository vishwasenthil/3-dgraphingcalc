function Sidebar() {
    let containerStyle = {
        height:"100vh",
        width:"100vw",
        display:`grid`,
        gridTemplateColumns:`1fr 3fr`
    };
    let sidebarStyle = {
        gridColumns:`1/2`,
        background:`#ccc`,
        border:`3px solid black`
    };
    return(
        <div style={containerStyle}>
            <aside style={sidebarStyle}>
                <input type="text"/>
            </aside>
        </div>
    );
}

export default Sidebar;