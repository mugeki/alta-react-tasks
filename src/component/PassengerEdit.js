import { useState } from "react";
import "./Home.css";

function PassengerEdit(props) {
	const [state, setState] = useState({
		nama: "",
		umur: "",
		jenisKelamin: "Pria",
		editing: true,
	});

	const onChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		if (state.nama.trim() && state.umur && state.jenisKelamin) {
			const umur = state.umur;
			if (umur >= 75 || umur <= 12) {
				alert("Umur tidak sesuai");
			} else {
				const newData = {
					nama: state.nama,
					umur: state.umur,
					jenis_kelamin: state.jenisKelamin,
				};
				props.editPengunjung(props.id, newData);
				setState({
					...state,
					nama: "",
					umur: "",
					jenisKelamin: "Pria",
				});
			}
		} else {
			alert("Data masih ada yang kosong");
		}
	};

	const handleBukaInput = () => {
		setState({
			...state,
			editing: false,
		});
	};

	const handleTutupInput = () => {
		setState({
			...state,
			editing: true,
		});
	};
	let viewMode = {
		backgroundColor: "white",
		border: "1px solid black",
		position: "absolute",
		padding: "10px",
		zIndex: "2",
	};
	let editMode = {};

	if (state.editing) {
		viewMode.display = "none";
	} else {
		editMode.display = "none";
	}

	return (
		<div>
			<div
				className="border position-absolute"
				onSubmit={handleSubmit}
				style={viewMode}
			>
				<p>Masukkan Nama</p>
				<input
					type="text"
					className="input-text"
					placeholder="Nama ..."
					value={state.nama}
					name="nama"
					onChange={onChange}
				/>
				<p>Masukkan Umur</p>
				<input
					type="number"
					className="input-text"
					placeholder="Umur ..."
					value={state.umur}
					name="umur"
					onChange={onChange}
				/>
				<p>Masukkan Jenis Kelamin</p>
				<select onChange={onChange} name="jenisKelamin">
					<option value="Pria" selected>
						Pria
					</option>
					<option value="Wanita">Wanita</option>
				</select>
				<p></p>
				<button onClick={handleSubmit}>Submit</button>
				<button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
					Batal
				</button>
			</div>
			<button onClick={handleBukaInput} style={editMode}>
				Edit
			</button>
		</div>
	);
}

export default PassengerEdit;
