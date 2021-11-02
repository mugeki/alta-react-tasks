import "./App.css";
import { mockTodos } from "./mockData";
import TodoPage from "./pages/ToDo/TodoPage";

function App() {
	return (
		<div className="App">
			<TodoPage todos={mockTodos} />
		</div>
	);
}

export default App;
