import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("When Rendered", () => {
	test("returns current initial value", () => {
		const { result } = renderHook(() => useInputValue("Test string"));

		expect(result.current.value).toEqual("Test string");
	});

	test("changes the value and uppercases it", () => {
		const { result } = renderHook(() => useInputValue("Test string"));

		act(() => result.current.onChange({ target: { value: "Updated" } }));
		expect(result.current.value).toEqual("Updated");
	});

	test("updates the value", () => {
		const { result, rerender } = renderHook(({ text }) => useInputValue(text), {
			initialValue: { text: "Test String" },
		});

		rerender({ text: "New updated" });
		expect(result.current.value).toEqual("New updated");
	});
});
