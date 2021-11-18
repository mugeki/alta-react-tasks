import { useSubscription } from "@apollo/client";
import { SubscriptionPassenger } from "../graphql/subscription";

export default function useSubscribePassenger() {
	const {
		data: dataSubs,
		loading: loadingSubs,
		error: errorSubs,
	} = useSubscription(SubscriptionPassenger);

	return { dataSubs, loadingSubs, errorSubs };
}
