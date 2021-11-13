export default function NewsItem(props) {
	const { content, title } = props;
	return (
		<div className="container card p-4 mb-3">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{content}</p>
		</div>
	);
}
