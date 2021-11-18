import { useMutation } from "@apollo/client";
import { InsertPassenger } from "../graphql/mutation";

export default function useInsertPassenger() {
	const [insertPassenger, { loading: loadingInsert }] =
		useMutation(InsertPassenger);
	return { insertPassenger, loadingInsert };
}
