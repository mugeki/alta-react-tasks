import React from "react";
import profileImage from "../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

export default function HomeBody() {
	return (
		<section className="h-100">
			<div className="container m-auto">
				<div className="row row-cols-sm-1 row-cols-md-2 pt-3">
					<div className="col-8 col-sm-9 col-md-5 col-lg-5 col-xl-5 m-auto">
						<img
							src={profileImage}
							alt="profile"
							id="profile-image"
							className="w-100 float-end mt-5 py-5"
						/>
					</div>
					<div
						className="
							col-10 col-sm-8 col-lg-7 col-xl-6
							m-auto
							text-center text-md-start
						"
					>
						<p className="fs-6 fw-bold mb-0">Hi, my name is</p>
						<p className="fs-1 fw-bold mb-0">Anne Sullivan</p>
						<p className="fs-4 fw-bold mb-0">I build things for the web</p>
						<a
							href="contact_us.html"
							className="btn text-white px-4 mt-2"
							id="submit-btn"
						>
							Get in Touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
