import { gql } from "@apollo/client";

const InsertPassenger = gql`
	mutation MyMutation($nama: String!, $umur: Int!, $jenis_kelamin: String!) {
		insert_anggota(
			objects: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }
		) {
			affected_rows
		}
	}
`;

const DeletePassenger = gql`
	mutation MyMutation($id: Int!) {
		delete_anggota_by_pk(id: $id) {
			id
		}
	}
`;

const UpdatePassenger = gql`
	mutation MyMutation(
		$id: Int!
		$jenis_kelamin: String
		$nama: String
		$umur: Int
	) {
		update_anggota_by_pk(
			pk_columns: { id: $id }
			_set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
		) {
			id
			jenis_kelamin
			nama
			umur
		}
	}
`;

export { InsertPassenger, DeletePassenger, UpdatePassenger };
