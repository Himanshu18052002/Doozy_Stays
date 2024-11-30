import React from "react";
import image1 from "../../../assets/Images/1i.jpg";
import image2 from "../../../assets/Images/2i.webp";
import image3 from "../../../assets/Images/3i.webp";

function Features({ direction, heading, colorHeading, description }) {
  return (
    <>
      <div
        style={{ flexDirection: `row-${direction}` }}
        className={`flex gap-8 items-center justify-between`}
      >
        <div className="flex items-center gap-2">
          <div className="w-2/5">
            <img src={image1} className="w-full rounded-xl" alt="image1" />
          </div>
          <div className="flex w-1/2 2-full flex-col justify-between gap-2 ">
            <img src={image2} className="w-full rounded-xl" alt="image2" />
            <img src={image3} className="w-full rounded-xl" alt="image3" />
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-10 -ml-5">
          <h2 style={{ fontWeight: "600", fontSize: "1.75rem" }}>
            <span style={{ color: " #115691" }}>{colorHeading}</span> {heading}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Features;
