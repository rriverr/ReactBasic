import React from 'react';
import './App.css';
import LifecycleEx from './R008_LifecycleEx';


function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML적용하기</p>
      <LifecycleEx
        prop_value='FromApp.js'/>
    </div>
  );
}

export default App;
