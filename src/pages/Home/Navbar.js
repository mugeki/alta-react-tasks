import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-ALTA.png";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light shadow-sm">
			<div className="container-fluid px-5">
				<NavLink to="/" className="navbar-brand">
					<img src={logo} alt="logo" className="w-75" />
				</NavLink>

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
						<NavLink to="/" className="nav-link mx-3" replace>
							HOME
						</NavLink>
						<NavLink to="/about" className="nav-link mx-3" replace>
							ABOUT
						</NavLink>
						<NavLink to="/news" className="nav-link mx-3" replace>
							NEWS
						</NavLink>
						<NavLink to="/contact_us" className="nav-link mx-3" replace>
							CONTACT
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}
