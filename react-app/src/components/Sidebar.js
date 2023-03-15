import "./componentStyles/Sidebar.css"

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
        border:`3px solid black`,
        position:`relative`
    };
    return(
        <div style={containerStyle}>
            <aside style={sidebarStyle}>
                <input type="text" style={{position:`absolute`, left:`0`, top:`0`, width:`100%`, boxSizing:`border-box`}}/>
            </aside>
        </div>
    );
}

export default Sidebar;