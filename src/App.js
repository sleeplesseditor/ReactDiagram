import * as React from 'react';
import './App.scss';
import DiagramComponent from './components/DiagramComponent';

function App() {
  const [coordXProp, setCoordXProp] = React.useState(400);
  const [coordYProp, setCoordYProp] = React.useState(100);
  const [newNodeIndex, setNewNodeIndex] = React.useState(1);
  
  const changeNode2X = () => {
    setCoordXProp(Math.floor(Math.random() * 500 + 1))
  }

  const changeNode2Y = () => {
    setCoordYProp(Math.floor(Math.random() * 100 + 1))
  }

  return (
    <div className="App">
      <DiagramComponent xProps={coordXProp} yProps={coordYProp} newNodeIndex={newNodeIndex} />
      <br />
      X: {coordXProp} – Y: {coordYProp}

      <div className="App-lower">
        <div className="App-btn-container">
          <div className="App-btn-container-row">
            <button className="button" onClick={changeNode2X}>Change Node 2 X Coords</button>
            <button className="button" onClick={changeNode2Y}>Change Node 2 Y Coords</button>
          </div>
          <div className="App-btn-container-row">
            <button className="button" onClick={() => setNewNodeIndex(newNodeIndex + 1)}>Add Node</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
