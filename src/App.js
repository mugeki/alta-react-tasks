import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/ToDo/Home";
import About from "./pages/About/About";
import NotFound from "./pages/Error/NotFound";

function App() {
	const aboutAppTitle = "App";
	const aboutAppText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum sem justo, et rhoncus quam consectetur in. Nunc fringilla, tellus eget vehicula eleifend, nibh elit accumsan mi, sit amet lobortis sapien odio ac dolor.";
	const aboutAuthorTitle = "Author";
	const aboutAuthorText =
		"Nulla vitae iaculis libero, at maximus risus. Praesent ex diam, fermentum in malesuada nec, ornare non lorem. Sed mattis varius orci ut vestibulum. Sed tempus ullamcorper nunc nec egestas.";
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="" exact element={<Home />} />
					<Route path="about" exact element={<About title="Page" />} />
					<Route
						path="about/about-app"
						exact
						element={<About title={aboutAppTitle} text={aboutAppText} />}
					/>
					<Route
						path="about/about-author"
						exact
						element={<About title={aboutAuthorTitle} text={aboutAuthorText} />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
