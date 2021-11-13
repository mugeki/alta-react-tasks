import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import ReviewMessage from "./pages/ReviewMessage/ReviewMessage";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/contact_us" exact element={<ContactUs />} />
				<Route path="/review_message" exact element={<ReviewMessage />} />
				<Route path="/news" exact element={<News />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
