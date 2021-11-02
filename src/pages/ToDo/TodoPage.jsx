import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function TodoPage({ todos }) {
	return (
		<div>
			<Header text="To Do App" />
			<ul style={{ listStyleType: "none" }}>
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoItem todo={todo} />
					</li>
				))}
			</ul>
		</div>
	);
}
