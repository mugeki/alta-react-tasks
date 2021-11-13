import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import moment from "moment";
import profileImage from "../../assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
	const [time, setTime] = useState(moment().format("h:mm:ss"));
	useEffect(() => {
		let isMounted = true;
		setInterval(() => {
			if (isMounted) {
				setTime(moment().format("h:mm:ss"));
			}
		}, 1000);
		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<div className="Home">
			<Navbar />
			<section className={`${styles.content} h-100`}>
				<div className="float-end p-2 fs-6 fw-bold">{time}</div>
				<div className="container m-auto">
					<div className="row row-cols-sm-1 row-cols-md-2 pt-3">
						<div className="col-8 col-sm-9 col-md-5 col-lg-5 col-xl-5 m-auto">
							<img
								src={profileImage}
								alt="profile"
								id="profile-image"
								className="w-100 float-end mt-5 py-5 rounded-circle"
							/>
						</div>
						<div
							className="
							col-10 col-sm-8 col-lg-7 col-xl-6
							m-auto
							text-center text-md-start
						"
						>
							<p className={`${styles.profileText1} fw-bold mb-0`}>
								Hi, my name is
							</p>
							<p className={`${styles.profileText2} fw-bold mb-0`}>
								Anne Sullivan
							</p>
							<p className={`${styles.profileText3} fw-bold mb-0`}>
								I build things for the web
							</p>
							<Link
								to="/contact_us"
								className="btn text-white px-4 mt-2 rounded-pill"
								style={{ backgroundColor: "#f47522" }}
							>
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
