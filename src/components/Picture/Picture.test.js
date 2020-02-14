import React from "react";
import Picture from "./Picture";

describe("Picture", () => {
  it("does not render any image by default", () => {
    const { queryByTestId } = renderWithState(<Picture />);

    const image = queryByTestId(/image1/i);

    expect(image).not.toBeInTheDocument();
  });

  it("renders images", () => {
    const props = {
      showImage1: true,
      showImage2: true,
      showImage3: true,
      showImage4: true
    };

    const { getByTestId } = renderWithState(<Picture {...props} />);

    getByTestId(/image1/i);
    getByTestId(/image2/i);
    getByTestId(/image3/i);
    getByTestId(/image4/i);
  });
});
