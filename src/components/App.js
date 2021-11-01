import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import ContactUs from "../routes/ContactUs";

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contact_us" exact component={ContactUs} />
			</Switch>
		</BrowserRouter>
	);
}
