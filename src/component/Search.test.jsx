import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
	test("Fetch stories from API & display it | Valid Test", async () => {
		const stories = [
			{ objectID: "1", title: "Hello" },
			{ objectID: "2", title: "React" },
		];

		axios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { hits: stories } })
		);

		render(<Search />);

		await act(async () => {
			await userEvent.click(screen.getByRole("button"));
		});

		const items = await screen.findAllByRole("listitem");
		expect(items).toHaveLength(2);
	});

	test("Fetch stories from API & display it | Invalid Test", async () => {
		axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

		render(<Search />);

		await act(async () => {
			await userEvent.click(screen.getByRole("button"));
		});

		const err = await screen.findByText(/Ada yang error/);
		expect(err).toBeInTheDocument();
	});
});
