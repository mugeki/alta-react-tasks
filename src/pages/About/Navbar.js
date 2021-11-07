import { useNavigate } from "react-router-dom";

export default function Navbar({ activePage }) {
	const navigate = useNavigate();
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
						<div
							style={{ cursor: "pointer" }}
							onClick={() => navigate("/")}
							className="nav-link pe-5 py-3"
						>
							Home
						</div>
						<div
							style={{ cursor: "pointer" }}
							onClick={() => navigate("/about/about-app")}
							className={`nav-link pe-5 py-3 ${
								activePage === "App" ? "active" : ""
							}`}
							aria-current={activePage === "App" ? "page" : ""}
						>
							About App
						</div>
						<div
							style={{ cursor: "pointer" }}
							onClick={() => navigate("/about/about-author")}
							className={`nav-link pe-5 py-3 ${
								activePage === "Author" ? "active" : ""
							}`}
							aria-current={activePage === "Author" ? "page" : ""}
						>
							About Author
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
