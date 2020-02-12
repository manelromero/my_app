import React from "react";
import { fireEvent, waitForElement } from "@testing-library/react";
import FirstLevel from "./FirstLevel";

describe("FirstLevel", () => {
  it("renders toggle button", () => {
    const { getByText } = renderWithState(<FirstLevel />);

    const button = getByText(/toggle/i);

    expect(button).toBeInTheDocument();
  });

  describe("when toggling image", () => {
    it("calls the action", () => {
      const showLevel = jest.fn();
      const { getByText, queryByText } = renderWithState(
        <FirstLevel showLevel={showLevel} />
      );

      const button = getByText(/toggle/i);
      fireEvent.click(button);

      expect(showLevel).toHaveBeenCalledWith(1);
    });
  });

  describe("while showing image", () => {
    it("shows message", () => {
      const showLevel = jest.fn();

      const { store, getByText } = renderWithState(
        <FirstLevel showLevel={showLevel} showImage1={true} />
      );

      getByText(/image/i);
    });
  });
});
