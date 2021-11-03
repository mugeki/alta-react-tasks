import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Home() {
	const [state, setState] = useState({
		data: [
			{
				id: 1,
				title: "Mengerjakan Exercise",
				completed: true,
			},
			{
				id: 2,
				title: "Mengerjakan Assignment",
				completed: false,
			},
		],
	});

	const deleteTodo = (id) => {
		const todos = state.data.filter((item) => item.id !== id);
		setState({ data: todos });
	};

	const addTodo = (newTodo) => {
		const todo = { id: uuidv4(), ...newTodo };
		setState({ data: [...state.data, todo] });
	};

	const checkTodo = (id) => {
		const todos = state.data.map((todo) => {
			if (todo.id === id) {
				todo.completed = true;
			}
			return todo;
		});
		setState({ data: todos });
	};

	const uncheckTodo = (id) => {
		const todos = state.data.map((todo) => {
			if (todo.id === id) {
				todo.completed = false;
			}
			return todo;
		});
		setState({ data: todos });
	};

	// useEffect(() => {
	// 	console.log("Checked");
	// }, [state]);

	return (
		<div>
			<Title text="todos" />
			<TodoInput addTodo={addTodo} />
			<TodoList
				data={state.data}
				deleteTodo={deleteTodo}
				checkTodo={checkTodo}
				uncheckTodo={uncheckTodo}
			/>
		</div>
	);
}
