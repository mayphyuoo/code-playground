import "./App.css";

import Editor from "./Components/Editor";
import Output from "./Components/Output";

function App() {
	return (
		<div className="App">
            <div className="header">
                <h1 class="inline">HTML, CSS, JS playground</h1>
                <p class="inline">made with ❤️ by <a target="_blank" href="https://github.com/mayphyuoo" rel="noreferrer">May</a></p>
            </div>
        
			<div>
				<Editor />

				<div className="output">
					<Output />
				</div>
			</div>
			<div class="button-area">
				<button id="runBtn" class="button">
					Run
				</button>
				<button id="resetBtn" class="button">
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
