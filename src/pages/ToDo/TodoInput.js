import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { useState } from "react";
import Toastify from "toastify-js";
import styles from "./TodoInput.module.css";
import "toastify-js/src/toastify.css";

export default function TodoInput(props) {
	const dispatch = useDispatch();

	const [state, setState] = useState({
		title: "",
		completed: false,
	});

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const isEmpty = state.title === "";
		if (!isEmpty) {
			const newData = {
				title: state.title,
				completed: state.completed,
			};
			dispatch(addTodo(newData));
			setState({
				title: "",
				completed: false,
			});
		} else {
			Toastify({
				text: "Todo's title cannot be empty",
				duration: 3000,
				style: {
					background: "#d43434",
				},
			}).showToast();
		}
	};

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Add todo..."
				name="title"
				value={state.title}
				className={styles.input}
				onChange={onChange}
			/>
			<button onClick={handleSubmit} className={styles.button}>
				Submit
			</button>
		</div>
	);
}
