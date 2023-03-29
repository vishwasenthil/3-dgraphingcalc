import "./css/SidebarStyles.css"

function Sidebar() {
    let sidebarStyle = {
        height:"100%",
        width:"100%",
        background:`#ccc`,
        border:`3px solid black`,
        position:`relative`
    };
    return(
        <div style={{height:"100vh", gridColumn:"1/2", gridRow:`1/2`}}>
            <aside style={sidebarStyle}>
                <input type="text" style={{position:`absolute`, left:`0`, top:`0`, width:`100%`, boxSizing:`border-box`}}/>
            </aside>
        </div>
    );
}

export default Sidebar;