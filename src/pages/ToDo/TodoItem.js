import styles from "./TodoItem.module.css";

export default function TodoItem({ item, deleteTodo, checkTodo, uncheckTodo }) {
	return (
		<tr className={styles.row}>
			<td>
				<input
					defaultChecked={item.completed ? true : false}
					type="checkbox"
					onClick={
						item.completed
							? () => uncheckTodo(item.id)
							: () => checkTodo(item.id)
					}
				/>
			</td>
			<td
				style={{ width: "290px" }}
				className={item.completed ? styles.completed : ""}
			>
				{item.title}
			</td>
			<td className={styles.content}>
				<button className={styles.button} onClick={() => deleteTodo(item.id)}>
					Delete
				</button>
			</td>
		</tr>
	);
}
