import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GetPassengerList } from "../graphql/query";
import { UpdatePassenger } from "../graphql/mutation";

export default function useUpdatePassenger(state) {
	const [passenger, setPassenger] = useState(state);
	const [updatePassenger, { loading: loadingUpdate }] = useMutation(
		UpdatePassenger,
		{
			refetchQueries: [GetPassengerList],
			awaitRefetchQueries: true,
			onCompleted: (data) => {
				setPassenger(data.anggota);
			},
		}
	);
	return { updatePassenger, loadingUpdate };
}
