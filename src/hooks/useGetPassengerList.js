import { useQuery } from "@apollo/client";
import { GetPassengerList } from "../graphql/query";
import { SubscriptionPassenger } from "../graphql/subscription";

export default function useGetPassengerList() {
	const { data, loading, error, subscribeToMore } = useQuery(GetPassengerList);

	const subscribePassenger = () => {
		subscribeToMore({
			document: SubscriptionPassenger,
			updateQuery: (prev, { subscriptionData: { data } }) => {
				console.log(data);
				return data;
			},
		});
	};
	return { data, loading, error, subscribePassenger };
}
