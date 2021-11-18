import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GetPassengerList } from "../graphql/query";
import { DeletePassenger } from "../graphql/mutation";

export default function useDeletePassenger(state) {
	const [passenger, setPassenger] = useState(state);
	const [deletePassenger, { loading: loadingDelete }] = useMutation(
		DeletePassenger,
		{
			refetchQueries: [GetPassengerList],
			awaitRefetchQueries: true,
			onCompleted: (data) => {
				setPassenger(data.anggota);
			},
		}
	);
	return { deletePassenger, loadingDelete };
}
