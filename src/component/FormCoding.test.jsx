import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";

describe("FormCoding", () => {
	test("Render Component", () => {
		render(<FormCoding />);

		expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
		expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
		expect(
			screen.getByLabelText(/Latar Belakang Pendidikan/)
		).toBeInTheDocument();
		expect(
			screen.getByLabelText(/Kelas Coding yang Dipilih/)
		).toBeInTheDocument();
		expect(
			screen.getByText(/Harapan Untuk Coding Bootcamp Ini/)
		).toBeInTheDocument();
	});

	test("Input Name, Email, No Handphone Field | Invalid Test", () => {
		render(<FormCoding />);

		fireEvent.input(screen.getByRole("textbox", { name: /Nama Lengkap/i }), {
			target: { value: "Noobmaster69" },
		});
		fireEvent.input(screen.getByRole("textbox", { name: /Email/i }), {
			target: { value: "Bukan Email" },
		});
		fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/i }), {
			target: { value: 12345678 },
		});

		expect(
			screen.getByText("Nama Lengkap Harus Berupa Huruf")
		).toBeInTheDocument();
		expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
		expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
		expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Noobmaster69");
		expect(screen.getByLabelText(/Email/)).toHaveValue("Bukan Email");
		expect(screen.getByLabelText(/No Handphone/)).toHaveValue(12345678);
	});

	test("Input Name, Email, No Handphone Field | Valid Test", () => {
		render(<FormCoding />);

		fireEvent.input(screen.getByRole("textbox", { name: /Nama Lengkap/i }), {
			target: { value: "Noobmaster" },
		});
		fireEvent.input(screen.getByRole("textbox", { name: /Email/i }), {
			target: { value: "iniemail@gmail.com" },
		});
		fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/i }), {
			target: { value: 123456789 },
		});

		expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Noobmaster");
		expect(screen.getByLabelText(/Email/)).toHaveValue("iniemail@gmail.com");
		expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);
	});

	test("Submit Button | Invalid Test", () => {
		render(<FormCoding />);
		jest.spyOn(window, "alert").mockImplementation(() => {});

		fireEvent.input(screen.getByRole("textbox", { name: /Nama Lengkap/i }), {
			target: { value: "Noobmaster69" },
		});
		fireEvent.input(screen.getByRole("textbox", { name: /Email/i }), {
			target: { value: "Bukan Email" },
		});
		fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/i }), {
			target: { value: 12345678 },
		});

		expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Noobmaster69");
		expect(screen.getByLabelText(/Email/)).toHaveValue("Bukan Email");
		expect(screen.getByLabelText(/No Handphone/)).toHaveValue(12345678);

		fireEvent.submit(screen.getByText("Submit"));
		expect(window.alert).toBeCalledWith(`Data Pendaftar Tidak Sesuai`);
	});

	test("Submit Button | Valid Test", () => {
		render(<FormCoding />);
		jest.spyOn(window, "alert").mockImplementation(() => {});

		fireEvent.input(screen.getByRole("textbox", { name: /Nama Lengkap/i }), {
			target: { value: "Noobmaster" },
		});
		fireEvent.input(screen.getByRole("textbox", { name: /Email/i }), {
			target: { value: "iniemail@gmail.com" },
		});
		fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/i }), {
			target: { value: 123456789 },
		});

		expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Noobmaster");
		expect(screen.getByLabelText(/Email/)).toHaveValue("iniemail@gmail.com");
		expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);

		fireEvent.submit(screen.getByText("Submit"));
		expect(window.alert).toBeCalledWith(
			`Data Pendaftar "Noobmaster" Berhasil Diterima`
		);
		expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
		expect(screen.getByLabelText(/Email/)).toHaveValue("");
	});
});
