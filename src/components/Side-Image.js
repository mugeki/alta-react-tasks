import React from "react";
import logo from "../assets/img/logo-ALTA-v2.png";

export default function SideImage() {
	return (
		<div className="col-sm-5 col-md-5 p-0 position-relative" id="side-image">
			<div className="w-100 h-100" id="overlay" />
			<img
				src={logo}
				alt="logo"
				id="side-image-logo"
				className="opacity-50 position-absolute top-50 start-50 translate-middle"
			/>
		</div>
	);
}
