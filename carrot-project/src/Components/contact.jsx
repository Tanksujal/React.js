import "./contact.css";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import 'animate.css';
const Contact = () => {
  return (
    <>
      <section wow-animated animate__backInUp className="mt-5 mb-5">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-12 mt-3 col-md-6 col-lg-4">
              <div className="contact-logo">
                <img src="../../img/logo.png" alt="" />
              </div>
              <div className="contact-p mb-3 mt-3">
                <p>
                  Carrot is the biggest market of grocery products. Get your
                  daily needs from our store.
                </p>
              </div>
              <div className="row two-li">
                <div className="col-1">
                  <MdLocationPin />
                </div>
                <div className="col-10">
                  <span>
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </span>
                </div>
              </div>
              <div className="row two-li">
                <div className="col-1">
                  <HiOutlineMail />
                </div>
                <div className="col-10">
                  <span>example@email.com</span>
                </div>
              </div>
              <div className="row two-li">
                <div className="col-1">
                  <FaPhone />
                </div>
                <div className="col-10">
                  <span>+91 123 4567890</span>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3 col-md-6 col-lg-2">
              <div className="contact-title">
                <h4>Company</h4>
              </div>
              <div className="contact-li">
                <ul className="p-0">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Delivery Information</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">contact Us</a>
                  </li>
                  <li>
                    <a href="">Support Center</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 mt-3 col-md-6 col-lg-2">
              <div className="contact-title">
                <h4>Category</h4>
              </div>
              <div className="contact-li">
                <ul className="p-0">
                  <li>
                    <a href="">Dairy & Bakery</a>
                  </li>
                  <li>
                    <a href="">Fruits & Vegetable</a>
                  </li>
                  <li>
                    <a href="">Snack & Spice</a>
                  </li>
                  <li>
                    <a href="">Juice & Drinks</a>
                  </li>
                  <li>
                    <a href="">Chicken & Meat</a>
                  </li>
                  <li>
                    <a href="">Fast Food</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 mt-3 col-md-6 col-lg-4">
              <div className="contact-letter">
                <div className="c-head">
                  <div className="sub-title">
                    <h4>Subscribe Our Newsletter</h4>
                  </div>
                  <div className="form-content">
                    <form>
                      <input type="text" placeholder="Search here..." />
                      <a href="">
                        <IoIosSend style={{fontSize: "21px",Color:"#000"}}/>
                      </a>
                    </form>
                  </div>
                  <div className="social-media">
                    <span>
                      <a href="">
                        <TfiFacebook />
                      </a>
                    </span>
                    <span>
                      <a href="">
                        <FaXTwitter />
                      </a>
                    </span>
                    <span>
                      <a href="">
                        <FaDribbble />
                      </a>
                    </span>
                    <span>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </span>
                  </div>
                  <div className="contact-pay d-flex">
                    <a href="">
                      <img src="../../img/c-1.jpg" alt="" />
                    </a>
                    <a href="">
                      <img src="../../img/c-2.jpg" alt="" />
                    </a>
                    <a href="">
                      <img src="../../img/c-3.jpg" alt="" />
                    </a>
                    <a href="">
                      <img src="../../img/c-4.jpg" alt="" />
                    </a>
                    <a href="">
                      <img src="../../img/c-5.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
