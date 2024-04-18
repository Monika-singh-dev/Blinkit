import React, { useEffect, useState } from "react";
import "./Description.css";
import { useParams } from "react-router-dom";

import { categories } from "../assests/categories";

import { Button } from "@chakra-ui/react";

const Description = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // name -> fetch category items

    const fetchData = categories.filter((obj) => obj.url === name);

    setItems(fetchData[0].items);
  }, []);

  return (
    <div className="main-description">
      <div className="full-div">
        <div className="itr">
          <div className="item-row">
            <nav className="item-name">
              <li>
                <a className="ad" href="">
                  Vegetables & Fruits
                </a>
              </li>
              <li>
                <a className="ad" href="">
                  Dairy & Breakfast
                </a>
              </li>
              <li>
                <a className="ad" href="">
                  Munchies
                </a>
              </li>
              <li>
                <a className="ad" href="">
                  Cold Drinks & Juices
                </a>
              </li>
              <li>
                <a className="ad" href="">
                  Instant & Frozen Food
                </a>
              </li>
              <li>
                <a className="ad" href="">
                  Tea Coffee & Health Drinks
                </a>
              </li>
              <li>
                <a className="ad" href="">
                  Bakery & Biscuits
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="category-div">
        <div className="itr">
          <div className="data-table">
            <div className="right-sec">
              <div style={{ margin: "12px" }}></div>
              <h1>
                <b>Dairy, Breads & Eggs</b>
              </h1>
            </div>
            <div className="item-div">
              <div className="card-sec">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
