import { useMutation } from "@apollo/client";
import { UpdatePassenger } from "../graphql/mutation";

export default function useUpdatePassenger() {
	const [updatePassenger, { loading: loadingUpdate }] =
		useMutation(UpdatePassenger);
	return { updatePassenger, loadingUpdate };
}
