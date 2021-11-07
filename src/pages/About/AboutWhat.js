export default function AboutWhat(props) {
	const { title, text } = props;
	return (
		<div className="text-start w-50 mx-auto">
			<h1>{title !== "Page" ? `About the ${title}` : `About ${title}`}</h1>
			<p>{text}</p>
		</div>
	);
}
