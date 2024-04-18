import React from "react";
import "./Products.css";
// import Header from "./Header";
// import Footer from "./Footer";
import images from "../images";
import Productcard from "./Productcard";
import { slices } from "../assests/slices";
import { categories } from "../assests/categories";

console.log(categories);

const Products = () => {
  return (
    <div className="main-container">
      <div className="pan">
        <img
          src={images.Paan}
          alt="Paan corner"
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
      <div className="ppb">
        <div className="col-sm">
          <img src={images.Pharmacy} alt="medicines and more" />
        </div>
        <div className="col-sm">
          <img src={images.Petcare} alt="medicines and more" />
        </div>
        <div className="col-sm">
          <img src={images.Babycare} alt="medicines and more" />
        </div>
      </div>
      <div className="all-categories">
        <div className="sections">
          {slices.map((slice, i) => (
            <Slice image={slice} />
          ))}
        </div>
      </div>

      {categories.map((category, i) => (
        <Productcard
          title={category.name}
          url={category.url}
          items={category.items}
        />
      ))}
    </div>
  );
};

const Slice = ({ image }) => {
  return (
    <div className="slices">
      <img src={image} alt="personal care" />
    </div>
  );
};

export default Products;
