import error from "./404NotFound.png";

export default function NotFound() {
	return (
		<div className="position-absolute top-50 start-50 translate-middle">
			<h1 className="fw-light">Page Not Found</h1>
			<img className="w-75" src={error} alt="error" />
		</div>
	);
}
