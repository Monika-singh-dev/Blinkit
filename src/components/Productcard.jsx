import React from "react";
import { Button } from "@chakra-ui/react";
import { urlFor } from "../sanity";
const Productcard = ({ title, slug, items }) => {
  // console.log(items);
  return (
    <div className="dbe">
      <div className="heading">
        <p style={{ fontSize: "25px" }}>
          <b>{title}</b>
        </p>
        <a
          style={{ fontSize: "20px", color: "lightgreen" }}
          href={`/category/${slug}`}
        >
          <b>see all</b>
        </a>
      </div>

      <div className="product-card">
        {/* <div className="befoore">
          <section className="bforr">::before</section>
        </div> */}
        <div className="sliderproduct-card">
          {items.map((item, i) => (
            <div className="producttype" key={i}>
              <div className="productimage">
                <img
                  src={
                    item.image
                      ? urlFor(item.image)
                      : "https://www.jqueryscript.net/demo/responsive-card-slider/img/default.jpg"
                  }
                  alt="paneer"
                />
              </div>
              <div className="titlebar">
                <div className="discription">
                  <p>
                    <b>{item.name}</b>
                  </p>
                </div>
                <div className="div">
                  <p style={{ color: "gray" }}>{item.weight}</p>
                </div>
                <div className="add">
                  <p style={{ fontSize: "12px" }}>
                    <b>₹{item.price}</b>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    <b>₹{item.mrp}</b>
                  </p>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    marginLeft={"5px"}
                  >
                    ADD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="befoor">
          <section className="bfor">::before</section>
        </div> */}
      </div>
    </div>
  );
};

export default Productcard;
