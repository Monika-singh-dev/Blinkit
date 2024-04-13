import React from "react";
import { Button } from "@chakra-ui/react";
const Descriptioncard = ({ items }) => {
  return (
    <div className="dbe">
      <div className="product-card">
        {items.map((item, i) => (
          <div className="producttype" key={i}>
            <div className="productimage">
              <img src={item.uri} alt="paneer" />
            </div>
            <div className="titlebar">
              <div className="discription">
                <p>
                  <b>{item.description}</b>
                </p>
              </div>
              <div className="div">
                <p>{item.weight}</p>
              </div>
              <div className="add">
                <p style={{ fontSize: "12px" }}>
                  <b>₹{item.price}</b>
                </p>
                <Button colorScheme="teal" variant="outline" marginLeft={"5px"}>
                  ADD
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Descriptioncard;
