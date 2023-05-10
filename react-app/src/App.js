import './App.css';
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph"


function App() {
  return (
    <div>
      <main id="container">
        <Graph/>
        <Sidebar/>
      </main>
    </div>
  );
}

export default App;
