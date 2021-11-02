import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

export default function ProfilePage({ users }) {
	return (
		<div>
			<Header text="Profile Page" />
			{users.map((user) => (
				<ProfileCard user={user} />
			))}
		</div>
	);
}
