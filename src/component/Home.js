import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery } from "@apollo/client";
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
	query MyQuery($id: uuid) {
		anggota(where: { id: { _eq: $id } }) {
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
	const [getPassenger, { data: data2, loading: loading2, error: error2 }] =
		useLazyQuery(GetPassengerByID, {
			onCompleted: (data) => {
				if (data) setPassenger(data2.anggota);
			},
		});
	const [userID, setUserID] = useState("");
	const [passenger, setPassenger] = useState();

	useEffect(() => {
		getPassengerList();
		if (data && typeof passenger === "undefined") {
			setPassenger(data.anggota);
		}
	}, [data, passenger, getPassengerList]);

	if (error || error2) {
		console.log(error);
		console.log(error2);
		return null;
	}

	if (loading || loading2) {
		return <Loading />;
	}

	const hapusPengunjung = (id) => {
		setPassenger({
			passenger: [
				...passenger.filter((item) => {
					return item.id !== id;
				}),
			],
		});
	};

	const tambahPengunjung = (newUser) => {
		const newPassenger = {
			id: uuidv4(),
			...newUser,
		};
		setPassenger({
			passenger: [...passenger, newPassenger],
		});
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
			<input value={userID} onChange={onChangeID}></input>
			<button onClick={onGetData}>Get Data</button>
			<ListPassenger passenger={passenger} hapusPengunjung={hapusPengunjung} />
			<PassengerInput tambahPengunjung={tambahPengunjung} />
		</div>
	);
}
