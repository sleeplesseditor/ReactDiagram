import * as React from 'react';
import './App.scss';
import DiagramComponent from './components/DiagramComponent';

function App() {
  const [coordXProp, setCoordXProp] = React.useState(400);
  const [coordYProp, setCoordYProp] = React.useState(100);
  
  const changeNode2X = () => {
    setCoordXProp(Math.floor(Math.random() * 500 + 1))
  }

  const changeNode2Y = () => {
    setCoordYProp(Math.floor(Math.random() * 100 + 1))
  }

  return (
    <div className="App">
      <DiagramComponent xProps={coordXProp} yProps={coordYProp} />
      <br />
      X: {coordXProp} – Y: {coordYProp}

      <div className="App-lower">
        <div className="App-btn-container">
          <button onClick={changeNode2X} >Change Node 2 X Coords</button>
          <button onClick={changeNode2Y} >Change Node 2 Y Coords</button>
        </div>
      </div>
    </div>
  );
}

export default App;
