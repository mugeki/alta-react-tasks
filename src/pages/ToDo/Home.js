// import { useState } from "react";
// import nextId from "react-id-generator";
import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Title text="todos" />
			<TodoInput />
			<TodoList />
		</div>
	);
}
