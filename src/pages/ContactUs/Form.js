import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Form.module.css";

export default function Form() {
	const navigate = useNavigate();
	const baseData = {
		nama: "",
		email: "",
		phone: "",
		nationality: "",
		message: "",
	};
	const baseError = {
		nama: "",
		email: "",
		phone: "",
		nationality: "",
	};

	const [data, setData] = useState(baseData);
	const [errorMessage, setErrorMessage] = useState(baseError);

	const regexNama =
		/^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;
	const regexEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const regexPhone = /^[0-9]{10,15}$/;

	const validateOnChange = (name, value) => {
		if (name === "nama" && !regexNama.test(value)) {
			setErrorMessage({
				...errorMessage,
				nama: "Full name must be alphabet",
			});
		} else if (regexNama.test(value)) {
			setErrorMessage({ ...errorMessage, nama: "" });
		}

		if (name === "email" && !regexEmail.test(value)) {
			setErrorMessage({
				...errorMessage,
				email: "Email is invalid",
			});
		} else if (regexEmail.test(value)) {
			setErrorMessage({
				...errorMessage,
				email: "",
			});
		}

		if (name === "phone" && !regexPhone.test(value)) {
			setErrorMessage({
				...errorMessage,
				phone: "Phone number is invalid",
			});
		} else if (regexPhone.test(value)) {
			setErrorMessage({
				...errorMessage,
				phone: "",
			});
		}

		if (name === "nationality" && value !== "") {
			setErrorMessage({
				...errorMessage,
				nationality: "",
			});
		}
	};

	const validateOnSubmit = () => {
		setErrorMessage(() => {
			const errorMessageArr = Object.keys(errorMessage).map((key) => {
				if (data[key] === "") {
					const err = `${
						key.charAt(0).toUpperCase() + key.slice(1)
					} cannot be empty`;

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
			(key) => key !== "message" && data[key] !== ""
		);

		if (validField.length < 4) {
			validateOnSubmit();
		} else {
			for (let key in data) {
				localStorage.setItem(`${key}`, JSON.stringify(data[key]));
			}
			navigate("/review_message");
		}
	};

	return (
		<div className="col-sm-7 col-md-7" style={{ padding: "5em 6em" }}>
			<h3>Contact Us</h3>
			<form onSubmit={onSubmit}>
				<div className="pb-3">
					<label className="form-label" htmlFor="fullname">
						Full Name <span className="text-danger">*</span>
					</label>
					<input
						className="form-control"
						type="text"
						name="nama"
						placeholder="Your Full Name Here..."
						value={data.nama}
						onChange={onChange}
					/>
					<span className={styles.error}>{errorMessage.nama}</span>
				</div>
				<div className="pb-3">
					<label className="form-label" htmlFor="email">
						Email Address <span className="text-danger">*</span>
					</label>
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="example@domain.com"
						value={data.email}
						onChange={onChange}
					/>
					<span className={styles.error}>{errorMessage.email}</span>
				</div>
				<div className="pb-3">
					<label className="form-label" htmlFor="phone">
						Phone Number <span className="text-danger">*</span>
					</label>
					<input
						className="form-control"
						type="tel"
						name="phone"
						placeholder="08573890xxxxx"
						value={data.phone}
						onChange={onChange}
					/>
					<span className={styles.error}>{errorMessage.phone}</span>
				</div>
				<div className="pb-3">
					<label className="form-label" htmlFor="nationality">
						Nationality
					</label>
					<select
						className="form-select"
						name="nationality"
						value={data.nationality}
						onChange={onChange}
					>
						<option disabled value="">
							Selected
						</option>
						<option value="Indonesia">Indonesia</option>
						<option value="Singapore">Singapore</option>
						<option value="Japan">Japan</option>
						<option value="Russia">Russia</option>
					</select>
					<span className={styles.error}>{errorMessage.nationality}</span>
				</div>
				<div className="pb-3">
					<label className="form-label" htmlFor="message">
						Message
					</label>
					<textarea
						className="form-control"
						name="message"
						cols={30}
						rows={5}
						placeholder="Your Message Here..."
						value={data.message}
						onChange={onChange}
					/>
				</div>
				<button
					type="submit"
					className="btn text-white px-4 mt-2 rounded-pill"
					style={{ backgroundColor: "#f47522" }}
				>
					Submit
				</button>
			</form>
		</div>
	);
}
