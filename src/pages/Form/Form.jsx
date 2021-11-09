import { useState, useRef } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function Form() {
	const baseData = {
		nama: "",
		email: "",
		noHandphone: "",
		pendidikan: "",
		kelas: "",
		harapan: "",
	};
	const baseError = {
		nama: "",
		email: "",
		noHandphone: "",
		pendidikan: "",
		kelas: "",
	};
	const suratKesungguhan = useRef("");
	const [data, setData] = useState(baseData);
	const [errorMessage, setErrorMessage] = useState(baseError);
	const regexNama =
		/^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;
	const regexEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const regexNoHP = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

	const resetData = () => {
		setData(baseData);
		setErrorMessage(baseError);
	};

	const validateOnChange = (name, value, refs) => {
		if (name === "nama" && !regexNama.test(value)) {
			setErrorMessage({
				...errorMessage,
				nama: "Nama lengkap harus berupa huruf",
			});
		} else if (regexNama.test(value)) {
			setErrorMessage({ ...errorMessage, nama: "" });
		}

		if (name === "email" && !regexEmail.test(value)) {
			setErrorMessage({
				...errorMessage,
				email: "Email tidak sesuai",
			});
		} else if (regexEmail.test(value)) {
			setErrorMessage({
				...errorMessage,
				email: "",
			});
		}

		if (name === "noHandphone" && !regexNoHP.test(value)) {
			setErrorMessage({
				...errorMessage,
				noHandphone: "No handphone tidak sesuai",
			});
		} else if (regexNoHP.test(value)) {
			setErrorMessage({
				...errorMessage,
				noHandphone: "",
			});
		}

		if (name === "pendidikan" && value !== "") {
			setErrorMessage({
				...errorMessage,
				pendidikan: "",
			});
		}

		if (name === "kelas" && value !== "") {
			setErrorMessage({
				...errorMessage,
				kelas: "",
			});
		}
	};

	const validateOnSubmit = () => {
		setErrorMessage(() => {
			const errorMessageArr = Object.keys(errorMessage).map((key) => {
				if (data[key] === "") {
					const err =
						key === "noHandphone"
							? "Field no handphone tidak boleh kosong"
							: `Field ${key} tidak boleh kosong`;

					return { [key]: err };
				}
				return { [key]: "" };
			});
			const updatedErrorMessage = errorMessageArr.reduce(
				(previousValue, currentValue) => {
					return { ...previousValue, ...currentValue };
				},
				{}
			);
			return updatedErrorMessage;
		});
	};

	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		validateOnChange(name, value);
		setData({
			...data,
			[name]: value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const validField = Object.keys(data).filter(
			(key) => key !== "harapan" && data[key] !== ""
		);
		if (validField.length < 5) {
			validateOnSubmit();
			Toastify({
				text: "Terdapat data yang kosong",
				duration: 3000,
			}).showToast();
		} else if (validField.length >= 5) {
			Toastify({
				text: `Data "${data.nama}" berhasil diterima`,
				duration: 3000,
			}).showToast();
			resetData();
		}
	};

	const labelStyle = "form-label text-start d-block";
	const inputStyle = "form-control";
	const selectStyle = "form-select";
	return (
		<div>
			<h1>Pendaftaran Peserta Coding Bootcamp</h1>
			<form className="p-5" onSubmit={onSubmit}>
				<label className={labelStyle}>
					Nama Lengkap:
					<input
						className={inputStyle}
						type="text"
						name="nama"
						value={data.nama}
						onChange={onChange}
					/>
				</label>
				<label className={labelStyle}>
					Email:
					<input
						className={inputStyle}
						type="email"
						name="email"
						value={data.email}
						onChange={onChange}
					/>
				</label>
				<label className={labelStyle}>
					No Handphone:
					<input
						className={inputStyle}
						type="tel"
						name="noHandphone"
						value={data.noHandphone}
						onChange={onChange}
					/>
				</label>
				<label className={`${labelStyle}`}>
					Latar Belakang Pendidikan:
					<div className="d-block">
						<input
							className="form-check-input"
							type="radio"
							name="pendidikan"
							value="IT"
							checked={data.pendidikan === "IT"}
							onChange={onChange}
						/>
						<label className="form-check-label">IT</label>
					</div>
					<div className="d-block">
						<input
							className="form-check-input"
							type="radio"
							name="pendidikan"
							value="Non IT"
							checked={data.pendidikan === "Non IT"}
							onChange={onChange}
						/>
						<label className="form-check-label">Non IT</label>
					</div>
				</label>
				<label className={labelStyle}>
					Kelas Coding yang Dipilih:
					<select
						className={selectStyle}
						name="kelas"
						value={data.kelas}
						onChange={onChange}
					>
						<option value="" disabled>
							Pilih Salah Satu Program
						</option>
						<option value="Coding Backend with Golang">
							Coding Backend with Golang
						</option>
						<option value="Coding Frontend with ReactJS">
							Coding Frontend with ReactJS
						</option>
						<option value="Fullstack Developer">Fullstack Developer</option>
					</select>
				</label>
				<label className={labelStyle}>
					Foto Surat Kesungguhan:
					<input
						className={inputStyle}
						type="file"
						refs={suratKesungguhan}
						required
					/>
				</label>
				<label className={labelStyle}>
					Harapan Untuk Coding Bootcamp Ini:
					<textarea
						className={inputStyle}
						name="harapan"
						value={data.harapan}
						onChange={onChange}
					/>
				</label>
				<div className="text-danger text-start">
					<ul>
						{Object.keys(errorMessage).map((key) => {
							if (errorMessage[key] !== "") {
								return (
									<li key={key} id={key}>
										{errorMessage[key]}
									</li>
								);
							}
							return "";
						})}
					</ul>
				</div>
				<div className="text-start mt-4">
					<input
						className="btn btn-success px-5 me-3"
						type="submit"
						value="Submit"
					/>
					<button
						type="button"
						onClick={resetData}
						className="btn btn-danger px-5"
					>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
}
