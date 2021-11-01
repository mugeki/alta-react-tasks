import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-ALTA.png";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light shadow-sm">
			<div className="container-fluid px-5">
				<Link to="/" className="navbar-brand" href="index.html">
					<img src={logo} alt="logo" className="w-75" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<Link
							to="/"
							className="nav-link mx-3 active fw-bolder"
							aria-current="page"
							href="index.html"
						>
							HOME
						</Link>
						<Link to="/" className="nav-link mx-3" href="index.html">
							ABOUT
						</Link>
						<Link to="/" className="nav-link mx-3" href="index.html">
							EXPERIENCE
						</Link>
						<Link
							to="/contact_us"
							className="nav-link mx-3"
							href="contact_us.html"
						>
							CONTACT
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
