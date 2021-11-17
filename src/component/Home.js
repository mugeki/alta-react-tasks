import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import Loading from "./Loading";

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
	query MyQuery($id: String!) {
		anggota(where: { id: { _eq: $id } }) {
			id
			jenis_kelamin
			nama
			umur
		}
	}
`;

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
	mutation MyMutation($id: String!) {
		delete_anggota_by_pk(id: $id) {
			id
		}
	}
`;

const UpdatePassenger = gql`
	mutation MyMutation(
		$id: String!
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

export default function Home() {
	const [getPassengerList, { data, loading, error }] =
		useLazyQuery(GetPassengerList);

	const [getPassenger, { loading: loadingSearch, error: errorSearch }] =
		useLazyQuery(GetPassengerByID, {
			fetchPolicy: "network-only",
			onCompleted: (data) => {
				setPassenger(data.anggota);
			},
		});

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

	const [userID, setUserID] = useState("");
	const [passenger, setPassenger] = useState();

	useEffect(() => {
		getPassengerList();
		if (data && typeof passenger === "undefined") {
			setPassenger(data.anggota);
		}
	}, [data, passenger, getPassengerList]);

	if (error || errorSearch) {
		console.log(error);
		console.log(errorSearch);
		return null;
	}

	if (
		loading ||
		loadingSearch ||
		loadingInsert ||
		loadingDelete ||
		loadingUpdate
	) {
		return <Loading />;
	}

	const hapusPengunjung = (id) => {
		deletePassenger({
			variables: {
				id,
			},
		});
		return data?.anggota;
	};

	const editPengunjung = (id, newData) => {
		updatePassenger({
			variables: {
				id,
				nama: newData.nama,
				umur: newData.umur,
				jenis_kelamin: newData.jenis_kelamin,
			},
		});
	};

	const tambahPengunjung = (newUser) => {
		const newPassenger = {
			id: uuidv4(),
			...newUser,
		};
		insertPassenger({
			variables: {
				nama: newPassenger.nama,
				umur: newPassenger.umur,
				jenis_kelamin: newPassenger.jenisKelamin,
			},
		});
		return data?.anggota;
	};

	const onGetData = () => {
		if (userID === "") {
			setPassenger(() => {
				getPassengerList();
				return data.anggota;
			});
		} else {
			getPassenger({
				variables: {
					id: userID,
				},
			});
		}
	};

	const onChangeID = (e) => {
		if (e.target) {
			setUserID(e.target.value);
		}
	};

	return (
		<div>
			<Header />
			<div style={{ padding: "20px" }}>
				<input value={userID} onChange={onChangeID}></input>
				<button onClick={onGetData}>Get Data</button>
			</div>

			<ListPassenger
				passenger={passenger}
				hapusPengunjung={hapusPengunjung}
				editPengunjung={editPengunjung}
			/>
			<PassengerInput tambahPengunjung={tambahPengunjung} />
		</div>
	);
}
