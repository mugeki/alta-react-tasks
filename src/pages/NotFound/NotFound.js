import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import error from "./404NotFound.png";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center">
			<img className="w-75 mx-auto" src={error} alt="error" />
			<h1 className="fw-light m-3 text-center">Page Not Found</h1>
			<button
				onClick={() => navigate("/")}
				className={`nav-link mt-3 mx-auto ${styles.button}`}
			>
				Back to Home
			</button>
		</div>
	);
}
