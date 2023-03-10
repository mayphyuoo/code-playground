import "./App.css";

import Editor from "./Components/Editor";
import Output from "./Components/Output";

function App() {
	return (
		<div className="App">
			<nav class="navbar">
				<div class="logo">Code playground</div>
				
				<ul class="nav-links">
					
					<input type="checkbox" id="checkbox_toggle" />
					
					<label for="checkbox_toggle" class="hamburger">
						&#9776;
					</label>
					
					<div class="menu">
						
						<li>Made with ❤️ by May</li>
						
						<li>
							<a href="https://github.com/mayphyuoo" target="_blank" rel="noreferrer">Repo <i class="uil uil-github-alt social-icon"></i></a>
						</li>

					</div>
				</ul>
			</nav>

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
