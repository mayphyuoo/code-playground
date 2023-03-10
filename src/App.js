import './App.css';

import Editor from "./Components/Editor";

function App() {
  return (
    <div className="App">
      <div className="playground">
        <Editor />

        <div className='output'>
        </div>
        
      </div>
      <button id="runBtn">Run</button>
    </div>
  );
}

export default App;
