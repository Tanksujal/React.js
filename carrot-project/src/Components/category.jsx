import { BiRightArrowAlt } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import "./category.css";
import { Categorys, CategoryList } from "./data";
import { useState } from "react";
const Category = () => {
  const [cat, setcat] = useState(CategoryList);
  const textTitle = {
    fontFamily: "Manrope, sans-serif",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2b2b2d",
  };

  const flitercategory = (name) => {
    if (name === "All") {
      setcat(CategoryList);
    } else {
      let data = CategoryList.filter((val) => {
        return val.name === name;
      });
      setcat(data);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex align-items-center text-center flex-column">
            <h2 style={textTitle}>Popular Products</h2>
            <p
              style={{ fontSize: "14px", lineHeight: "22px", color: "#7a7a7a" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor<br></br> incididunt ut labore lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="cat-box mt-2" onClick={() => flitercategory("All")}>
              <span>All</span>
              <span style={{ fontSize: "14px" }}>
                <BiRightArrowAlt />
              </span>
            </div>
            {Categorys.map((val) => {
              return (
                <div
                  className="cat-box mt-2"
                  key={val.id}
                  onClick={() => flitercategory(val.name)}
                >
                  <span>{val.name}</span>
                  <span style={{ fontSize: "14px" }}>
                    <BiRightArrowAlt />
                  </span>
                </div>
              );
            })}
            <div
              style={{
                background: "url(../../img/fr-1.jpg)",
                height: "450px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "5px",
              }}
              className="mt-2 fruit-box"
            >
              <div className="card-fruit pt-5 ps-3">
                <h4>Juicy</h4>
                <h5>FRUITS</h5>
                <span>100% Natural</span>
                <br></br>
                <button className="border-0 shop-btn pt-3">
                  <a href="" className="shop-btn-pro">
                    Shop Now
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {cat.map((val) => {
                return (
                  <div className="col-3 mt-3" key={val.id}>
                    <div className="cat-container">
                      <div className="cat-img">
                        <img src={val.img} className="w-100" alt="" />
                        <div className="cat-cart">
                          <a href="">
                            <IoBagOutline />
                          </a>
                        </div>
                      </div>
                      <div className="cat-text">
                        <a href="">{val.name}</a>
                        <span>(5.0)</span>
                        <p>{val.p}</p>
                      </div>
                      <div className="cat-price">
                        <span>${val.price}</span>
                        <del>${val.del}</del>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
