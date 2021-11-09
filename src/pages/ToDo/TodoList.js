import { useSelector, useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../../store/todoSlice";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList(props) {
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();
	return (
		<div className={styles.container}>
			<table style={{ borderCollapse: "collapse" }}>
				<tbody>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							item={todo}
							deleteTodo={() => {
								dispatch(deleteTodo(todo.id));
							}}
							checkTodo={() => {
								dispatch(checkTodo(todo.id));
							}}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
