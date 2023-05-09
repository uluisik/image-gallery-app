import React, { useState } from "react";
import "./Gallery.css";
import Images from "./Images";
import { FaWindowClose } from "react-icons/fa";
const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <FaWindowClose onClick={() => setModel(false)} className="x" />
      </div>
      <div className="gallery">
        {Images.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.image}
                alt=""
                style={{ width: "100%" }}
                onClick={() => getImg(item.image)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
