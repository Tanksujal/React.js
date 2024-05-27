import { BiRightArrowAlt } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import ReactImageMagnify from "react-image-magnify";
import "./category.css";
import './popular.css'
import { popularList } from "./data";
const Popular = () => {
  return (
    <>
      <section>
        <div className="container"style={{marginTop:"120px"}}>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="popular-box">
                <div className="row">
                  {popularList.map((val) => {
                    return (
                      <div className="col-4" key={val.id}>
                        <div className="cat-container">
                          <div className="cat-img">
                          <ReactImageMagnify
                              {...{
                                smallImage: {
                                  alt: "Wristwatch by Ted Baker London",
                                  isFluidWidth: true,
                                  src: val.img,
                                },
                                largeImage: {
                                  src: val.img,
                                  width: 500,
                                  height: 1800,
                                },
                                enlargedImagePosition:'over'
                              }}
                            />
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
            <div className="col-12 col-lg-4">
                <div className="popular-inner-box">
                  <h4>Organic & Healthy <br></br> Vegetables</h4>
                  <span>
                    25%
                    <code>off</code>
                  </span>
                  <a href="">Shop Now</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Popular;
