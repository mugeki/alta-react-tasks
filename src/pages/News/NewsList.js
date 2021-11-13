import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import nextId from "react-id-generator";

const URL =
	"https://newsapi.org/v2/top-headlines?" +
	"country=id&" +
	"apiKey=197aefef4baa483d9d48795acb49dcaa";

export default function NewsList() {
	const [news, setNews] = useState([]);
	const [err, setError] = useState("");

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const handleFetch = async () => {
			let result;
			try {
				result = await axios.get(URL, { cancelToken: source.token });
				setNews(result.data.articles);
			} catch (error) {
				setError(error);
			}
		};
		handleFetch();
		return () => {
			source.cancel();
		};
	}, []);

	return (
		<div className="container w-50 py-5">
			{news.map((item) => (
				<NewsItem key={nextId()} title={item.title} content={item.content} />
			))}
			{news.length === 0 && <h5>{err}</h5>}
		</div>
	);
}
