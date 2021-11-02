import styles from "./TodoItem.module.css";

export default function TodoItem({ todo }) {
	return (
		<div className={styles.item}>
			<p className={todo.completed ? styles.completed : ""}>{todo.title}</p>
		</div>
	);
}
