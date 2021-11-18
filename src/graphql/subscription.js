import { gql } from "@apollo/client";

const SubscriptionPassenger = gql`
	subscription MySubscription {
		anggota {
			id
			jenis_kelamin
			nama
			umur
		}
	}
`;

export { SubscriptionPassenger };
