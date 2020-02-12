import React from "react";
import Picture from "./Picture";

test("renders toggle button", () => {
  const { getByText } = renderWithState(<Picture />);

  const button = getByText(/toggle/i);

  expect(button).toBeInTheDocument();
});

