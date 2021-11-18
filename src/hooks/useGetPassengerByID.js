import { useLazyQuery } from "@apollo/client";
import { GetPassengerByID } from "../graphql/query";

export default function useGetPassengerByID(state) {
	const [
		getPassenger,
		{ data: dataSearch, loading: loadingSearch, error: errorSearch },
	] = useLazyQuery(GetPassengerByID, {
		fetchPolicy: "network-only",
	});
	return { dataSearch, getPassenger, loadingSearch, errorSearch };
}
