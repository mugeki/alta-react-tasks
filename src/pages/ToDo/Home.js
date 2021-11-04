import { useState } from "react";
import nextId from "react-id-generator";
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
		const todo = { id: nextId(), ...newTodo };
		setState({ data: [...state.data, todo] });
	};

	const checkTodo = (id) => {
		let todos;
		const todoTarget = state.data.filter((todo) => todo.id === id);
		console.log(todoTarget[0]);
		if (todoTarget[0].completed) {
			todos = state.data.map((todo) => {
				if (todo.id === id) {
					todo.completed = false;
				}
				return todo;
			});
		} else {
			todos = state.data.map((todo) => {
				if (todo.id === id) {
					todo.completed = true;
				}
				return todo;
			});
		}
		setState({ data: todos });
	};

	return (
		<div>
			<Title text="todos" />
			<TodoInput addTodo={addTodo} />
			<TodoList
				data={state.data}
				deleteTodo={deleteTodo}
				checkTodo={checkTodo}
			/>
		</div>
	);
}
