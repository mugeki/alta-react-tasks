import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav text-start ms-2">
						<Link
							to=""
							className="nav-link pe-5 py-3 active"
							aria-current="page"
						>
							Home
						</Link>
						<Link to="about" className="nav-link pe-5 py-3">
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
