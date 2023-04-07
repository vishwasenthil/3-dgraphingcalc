import "./css/SidebarStyles.css"
import {recreateMesh} from "./Graph"

function Sidebar(props) {
    let sidebarStyle = {
        height:"100%",
        width:"100%",
        background:`#ccc`,
        border:`3px solid black`,
        position:`relative`
    };
    function handleChange(e) {
        recreateMesh(e.target.value, 10);
    }
    return(
        <div style={{height:"100vh", gridColumn:"1/2", gridRow:`1/2`}}>
            <aside style={sidebarStyle}>
                <input onChange={handleChange} ref={props.element} id="textInput" type="text" style={{position:`absolute`, left:`0`, top:`0`, width:`100%`, boxSizing:`border-box`}}/>
            </aside>
        </div>
    );
}

export default Sidebar;