import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GetPassengerByID } from "../graphql/query";

export default function useGetPassengerByID(state) {
	const [passenger, setPassenger] = useState(state);
	const [getPassenger, { loading: loadingSearch, error: errorSearch }] =
		useLazyQuery(GetPassengerByID, {
			fetchPolicy: "network-only",
			onCompleted: (data) => {
				setPassenger(data.anggota);
			},
		});
	return { getPassenger, loadingSearch, errorSearch };
}
