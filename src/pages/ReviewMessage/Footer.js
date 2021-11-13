import dotsImg from "../../assets/img-dot.png";

export default function Footer() {
	return (
		<footer
			className="w-100 h-25 position-absolute bottom-0 end-0"
			style={{ backgroundColor: "#edf6ff" }}
		>
			<img
				className="position-absolute top-50 translate-middle"
				style={{ left: "20%" }}
				src={dotsImg}
				alt="dots"
			/>
		</footer>
	);
}
