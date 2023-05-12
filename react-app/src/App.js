import './App.css';
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import React, { useState } from 'react';
import {myScene} from "./components/Graph"
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    myScene.getEngine().resize();
  }

  return (
    <div>
      <main id="container">
        <button style={{ position: 'absolute', right: 0 }} onClick={toggleSidebar}>Toggle Sidebar</button>
        {isOpen &&  <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
        <Graph/>
      </main>
    </div>
  );
}

export default App;
