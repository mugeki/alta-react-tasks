import AboutWhat from "./AboutWhat";
import Navbar from "./Navbar";

export default function About(props) {
	const { title, text } = props;
	return (
		<div>
			<Navbar activePage={title} />
			<AboutWhat title={title} text={text} />
		</div>
	);
}
