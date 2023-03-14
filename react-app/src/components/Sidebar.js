function Sidebar() {
    let sidebarStyle = {
        width:`25%`,
        height:`100%`,
        background:`#ccc`,
        border:`3px solid black`
    };
    return(
        <div style={{display:`flex`, justifyContent:`left`, width:`100vw`, height:`100vh`}}>
            <aside style={sidebarStyle}>

            </aside>
        </div>
    );
}

export default Sidebar;