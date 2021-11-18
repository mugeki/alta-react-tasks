import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GetPassengerList } from "../graphql/query";
import { InsertPassenger } from "../graphql/mutation";

export default function useInsertPassenger(state) {
	const [passenger, setPassenger] = useState(state);
	const [insertPassenger, { loading: loadingInsert }] = useMutation(
		InsertPassenger,
		{
			refetchQueries: [GetPassengerList],
			awaitRefetchQueries: true,
			onCompleted: (data) => {
				setPassenger(data.anggota);
			},
		}
	);
	return { insertPassenger, loadingInsert };
}
