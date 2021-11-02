export default function Header({ text }) {
	return (
		<div
			style={{
				padding: "10px 10px",
				marginBottom: 20,
				boxShadow: "-1px 2px 5px 0px rgba(0,0,0,0.75)",
				textAlign: "left",
			}}
		>
			<h1>{text}</h1>
		</div>
	);
}
