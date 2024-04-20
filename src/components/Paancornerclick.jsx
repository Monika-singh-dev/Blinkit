import React from "react";
import "./Pancorner.css";
import images from "../images";
import Pcpcard from "./Pcpcard";
import { paancategories } from "../assests/categories";
const Paancornerclick = () => {
  return (
    <div className="main-containert">
      <div className="tobacco">
        <img
          src={images.tobacco}
          alt="tobacco image"
          style={{
            textalign: "center",
            display: "block",
            justifycontent: "center",
            alignitems: "center",
            margin: "auto",
            // width: "auto",
          }}
        />
      </div>
      <div className="tobacco">
        <img
          src={images.tobaccob}
          alt="tobacco image"
          style={{
            textalign: "center",
            display: "block",
            justifycontent: "center",
            alignitems: "center",
            margin: "auto",
            width: "1280px",
          }}
        />
      </div>
      <div className="circle-img">
        <div className="circle-sec">
          <div className="c-m">
            <img src={images.circle1} alt=" party essentials" />
          </div>
          <div className="c-m">
            <img src={images.circle2} alt=" party essentials" />
          </div>
          <div className="c-m">
            <img src={images.circle3} alt=" party essentials" />
          </div>
          <div className="c-m">
            <img src={images.circle4} alt=" party essentials" />
          </div>
          <div className="c-m">
            <img src={images.circle5} alt=" party essentials" />
          </div>
          <div className="c-m">
            <img src={images.circle6} alt=" party essentials" />
          </div>
        </div>
      </div>
      {paancategories.map((paancategorie, i) => (
        <Pcpcard
          title={paancategorie.name}
          url={paancategorie.url}
          items={paancategorie.items}
        />
      ))}
    </div>
  );
};

export default Paancornerclick;
