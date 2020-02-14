import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FourthLevel from "./FourthLevel";

describe("FourthLevel", () => {
  it("renders toggle button", () => {
    const { getByText } = render(<FourthLevel />);

    const button = getByText(/toggle/i);

    expect(button).toBeInTheDocument();
  });

  describe("while showing image", () => {
    it("shows message", () => {
      const { getByText } = render(<FourthLevel showImage4={true} />);

      getByText(/showing ball/i);
    });
  });

  describe("when toggling image", () => {
    it("calls the action", () => {
      const showLevel = jest.fn();
      const { getByText, queryByText } = render(
        <FourthLevel showLevel={showLevel} />
      );

      const button = getByText(/toggle/i);
      fireEvent.click(button);

      expect(showLevel).toHaveBeenCalledWith(4);
    });
  });
});
