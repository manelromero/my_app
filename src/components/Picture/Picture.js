import React from "react";

function Picture({
  showImage1,
  showImage2,
  showImage3,
  showImage4,
  showImage5
}) {
  return (
    <div className="Picture">
      <div className="Image Background"></div>
      {showImage1 && <div className="Image Image1" data-testid="image1"></div>}
      {showImage2 && <div className="Image Image2" data-testid="image2"></div>}
      {showImage3 && <div className="Image Image3" data-testid="image3"></div>}
      {showImage4 && <div className="Image Image4" data-testid="image4"></div>}
      {showImage5 && <div className="Image Image5" data-testid="image5"></div>}
    </div>
  );
}

export default Picture;
