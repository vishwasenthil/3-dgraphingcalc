import './App.css';
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph"
import React, { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <main id="container">
        <button style={{ position: 'absolute', right: 0 }} onClick={toggleSidebar}>Toggle Sidebar</button>
        <Graph/>
        {isOpen &&  <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
      </main>
    </div>
  );
}

export default App;
