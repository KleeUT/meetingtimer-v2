import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { SalaryEntry } from "./SalaryEntry";
import { useGlobalState } from "../GlobalState";
import { useActionCreator } from "./salaryEntryActionCreator";
jest.mock("../GlobalState");
jest.mock("./salaryEntryActionCreator");

describe("salary Entry", () => {
  afterEach(() => {
    cleanup();
  });
  it("Should render the input field", () => {
    (useGlobalState as jest.Mock).mockReturnValue({
      state: {}
    });
    const { getByTestId } = render(<SalaryEntry />);
    const node = getByTestId("salary-entry-input");
    expect(node).toBeDefined();
  });

  it("Should render the state value on render", () => {
    (useGlobalState as jest.Mock).mockReturnValue({
      state: {
        averageSalary: 153
      }
    });
    const { getByTestId } = render(<SalaryEntry />);
    const node = getByTestId("salary-entry-input") as HTMLInputElement;
    expect(node.value).toEqual("153");
  });

  it("Should call the action creator on input change", () => {
    (useGlobalState as jest.Mock).mockReturnValue({
      state: {}
    });
    (useActionCreator as jest.Mock).mockReturnValue({
      updateSalary: jest.fn()
    });
    const { getByTestId } = render(<SalaryEntry />);
    const node = getByTestId("salary-entry-input") as HTMLInputElement;
    fireEvent.input(node, { target: { value: "15" } });
    expect(useActionCreator().updateSalary).toHaveBeenCalledWith("15");
  });
});
