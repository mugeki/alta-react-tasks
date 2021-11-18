import { gql } from "@apollo/client";

const GetPassengerList = gql`
	query MyQuery {
		anggota {
			id
			jenis_kelamin
			nama
			umur
		}
	}
`;

const GetPassengerByID = gql`
	query MyQuery($id: Int!) {
		anggota(where: { id: { _eq: $id } }) {
			id
			jenis_kelamin
			nama
			umur
		}
	}
`;

export { GetPassengerList, GetPassengerByID };
