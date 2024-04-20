import { Button } from "@chakra-ui/react";
import React from "react";

const Pcpcard = ({ title, url, items }) => {
  return (
    <div className="dbe">
      <div className="heading">
        <p style={{ fontSize: "25px" }}>
          <b>{title}</b>
        </p>
        <a
          style={{ fontSize: "20px", color: "lightgreen" }}
          href={`/paancategory/${url}`}
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
                <img src={item.uri} alt="paneer" />
              </div>
              <div className="titlebar">
                <div className="discription">
                  <p>
                    <b>{item.description}</b>
                  </p>
                </div>
                <div className="div">
                  <p style={{ color: "gray" }}>{item.weight}</p>
                </div>
                <div className="add">
                  <p style={{ fontSize: "12px" }}>
                    <b>₹{item.price}</b>
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

export default Pcpcard;
