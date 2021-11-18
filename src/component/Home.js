import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import useDeletePassenger from "../hooks/useDeletePassenger";
import useGetPassengerByID from "../hooks/useGetPassengerByID";
import useGetPassengerList from "../hooks/useGetPassengerList";
import useInsertPassenger from "../hooks/useInsertPassenger";
import useUpdatePassenger from "../hooks/useUpdatePassenger";
import useSubscribePassenger from "../hooks/useSubscribePassenger";
import Loading from "./Loading";

export default function Home() {
	const [userID, setUserID] = useState("");
	const [passenger, setPassenger] = useState();

	const { data, loading, error, subscribePassenger } = useGetPassengerList();
	// console.log("subsfunc: ", subscribePassenger);
	const { getPassenger, loadingSearch, errorSearch } =
		useGetPassengerByID(passenger);
	const { insertPassenger, loadingInsert } = useInsertPassenger(passenger);
	const { deletePassenger, loadingDelete } = useDeletePassenger(passenger);
	const { updatePassenger, loadingUpdate } = useUpdatePassenger(passenger);
	const { dataSubs, loadingSubs, errorSubs } = useSubscribePassenger();

	useEffect(() => {
		subscribePassenger();
		// getPassengerList();
		console.log("dataSubs: ", dataSubs);
		setPassenger(dataSubs?.anggota);
	}, [subscribePassenger, dataSubs]);

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
		loadingUpdate ||
		loadingSubs
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
				// getPassengerList();
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
