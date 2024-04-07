import React from "react";
import { Button } from "@chakra-ui/react";
const Productcard = ({ title, images, discription }) => {
  return (
    <div className="dbe">
      <div className="heading">
        <p style={{ fontSize: "25px" }}>
          <b>{title}</b>
        </p>
        <p style={{ fontSize: "20px", color: "lightgreen" }}>
          <b>see all</b>
        </p>
      </div>
      <div className="product-card">
        <div className="sliderproduct-card">
          {images.map((image, i) => (
            <div className="producttype" key={i}>
              <img src={image} alt="paneer" />
              <div>
                <p>{discription}</p>
                <Button colorScheme="teal" variant="outline" marginLeft={"5px"}>
                  ADD
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productcard;
