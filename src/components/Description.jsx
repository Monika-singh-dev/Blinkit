import React from "react";
import "./Description.css";

import { categories } from "../assests/categories";
import Descriptioncard from "./Descriptioncard";

const Description = () => {
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
              <li>
                {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
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
                {categories.map((category, i) => (
                  <Descriptioncard
                    title={category.name}
                    items={category.items}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
