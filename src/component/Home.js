import { useEffect, useState } from "react";
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
	const { dataSearch, getPassenger, loadingSearch, errorSearch } =
		useGetPassengerByID();
	const { insertPassenger, loadingInsert } = useInsertPassenger();
	const { deletePassenger, loadingDelete } = useDeletePassenger();
	const { updatePassenger, loadingUpdate } = useUpdatePassenger();
	const { dataSubs, loadingSubs, errorSubs } = useSubscribePassenger();

	useEffect(() => {
		if (!loading && !dataSearch && userID === "") {
			subscribePassenger();
			setPassenger(dataSubs?.anggota);
		}
		if (dataSearch && userID !== "") {
			setPassenger(dataSearch?.anggota);
		}
	}, [subscribePassenger, loading, dataSubs, dataSearch, userID]);

	if (error || errorSearch || errorSubs) {
		console.log(error);
		console.log(errorSearch);
		console.log(errorSubs);
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
		getPassenger({
			variables: {
				id: userID === "" ? 0 : userID,
			},
		});
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
