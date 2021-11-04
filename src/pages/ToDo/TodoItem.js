import styles from "./TodoItem.module.css";

export default function TodoItem(props) {
	const { item, deleteTodo, checkTodo } = props;
	return (
		<tr className={styles.row}>
			<td>
				<input
					defaultChecked={item.completed ? true : false}
					type="checkbox"
					onClick={() => checkTodo(item.id)}
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
