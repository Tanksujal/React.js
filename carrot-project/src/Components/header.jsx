// import { HiBars3CenterLeft } from "react-icons/hi2";
// import './header.css'
// const Header = () => {
//     return(
//         <>
//            <header>
//                 <div className="container">
//                     <div className="row top-heeader">
//                         <div className="col-3">
//                             <div className="head-category">
//                                 <button className="bars">
//                                 <HiBars3CenterLeft />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="col-7">
                            
//                         </div>
//                         <div className="col-2"></div>
//                     </div>
//                 </div>
//            </header>
//         </>
//     )
// }
// export default Header

import React from 'react'
import './header.css'
import { RiUser3Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { GrPhone } from "react-icons/gr";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";


const Header = () => {
  return (
    <>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="top-header">
                        <a href="index.html" class="cr-logo">
                          <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="logo" class="logo"/>
                        </a>
                        <form class="cr-search">
                            <input class="search-input" type="text" placeholder="Search For items..."/>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>All Categories</option>
                                <option value="1">Mens</option>
                                <option value="2">Womens</option>
                                <option value="3">Electronics</option>
                            </select>
                            <a href="javascript:void(0)" class="search-btn">
                              <FiSearch />
                            </a>
                        </form>
                        <div class="cr1-right-bar">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle cr1-right-bar-item" href="javascript:void(0)">
                                        <RiUser3Line />
                                        <span>Account</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">Register</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Checkout</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Login</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="wishlist.html" class="cr1-right-bar-item">
                                <IoHeartOutline />
                                <span>Wishlist</span>
                            </a>
                            <a href="javascript:void(0)" class="cr1-right-bar-item Shopping-toggle">
                                <RiShoppingCartLine />
                                <span>Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cr-fix" id="cr-main-menu-desk">
            <div class="container">
                <div class="cr-menu-list">
                    <div class="cr-category-icon-block">
                        <div class="cr-category-menu">
                            <div class="cr-category-toggle">
                              <IoReorderThreeOutline />
                            </div>
                        </div>
                        <div class="cr-cat-dropdown">
                            <div class="cr-cat-block">
                                <div class="cr-cat-tab">
                                    <div class="cr-tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-home" type="button" role="tab"
                                            aria-controls="v-pills-home" aria-selected="true">
                                            Dairy &amp; Bakery</button>
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile" type="button" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" tabindex="-1">
                                            Fruits &amp; Vegetable</button>
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages" type="button" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false" tabindex="-1">
                                            Snack &amp; Spice</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-settings" type="button" role="tab"
                                            aria-controls="v-pills-settings" aria-selected="false" tabindex="-1">
                                            Juice &amp; Drinks </button>
                                        <a class="nav-link" href="#">
                                            View All </a>
                                    </div>
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                            aria-labelledby="v-pills-home-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Dairy</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Milk</a></li>
                                                        <li><a href="#">Ice cream</a>
                                                        </li>
                                                        <li><a href="#">Cheese</a></li>
                                                        <li><a href="#">Frozen
                                                                custard</a>
                                                        </li>
                                                        <li><a href="#">Frozen
                                                                yogurt</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Bakery</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Cake and
                                                                Pastry</a>
                                                        </li>
                                                        <li><a href="#">Rusk Toast</a>
                                                        </li>
                                                        <li><a href="#">Bread &amp;
                                                                Buns</a>
                                                        </li>
                                                        <li><a href="#">Chocolate
                                                                Brownie</a>
                                                        </li>
                                                        <li><a href="#">Cream Roll</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Fruits</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Cauliflower</a>
                                                        </li>
                                                        <li><a href="#">Bell
                                                                Peppers</a></li>
                                                        <li><a href="#">Broccoli</a>
                                                        </li>
                                                        <li><a href="#">Cabbage</a>
                                                        </li>
                                                        <li><a href="#">Tomato</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Vegetable</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Cauliflower</a>
                                                        </li>
                                                        <li><a href="#">Bell
                                                                Peppers</a></li>
                                                        <li><a href="#">Broccoli</a>
                                                        </li>
                                                        <li><a href="#">Cabbage</a>
                                                        </li>
                                                        <li><a href="#">Tomato</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                            aria-labelledby="v-pills-messages-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Snacks</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">French
                                                                fries</a></li>
                                                        <li><a href="#">potato
                                                                chips</a></li>
                                                        <li><a href="#">Biscuits &amp;
                                                                Cookies</a></li>
                                                        <li><a href="#">Popcorn</a>
                                                        </li>
                                                        <li><a href="#">Rice Cakes</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Spice</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Cinnamon
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="#">Cumin
                                                                Powder</a></li>
                                                        <li><a href="#">Fenugreek
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="#">Pepper
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="#">Long Pepper</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                            aria-labelledby="v-pills-settings-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Juice</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Mango Juice</a>
                                                        </li>
                                                        <li><a href="#">Coconut
                                                                Water</a>
                                                        </li>
                                                        <li><a href="#">Tetra Pack</a>
                                                        </li>
                                                        <li><a href="#">Apple
                                                                Juices</a></li>
                                                        <li><a href="#">Lychee
                                                                Juice</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">soft drink</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="#">Breizh Cola</a>
                                                        </li>
                                                        <li><a href="#">Green Cola</a>
                                                        </li>
                                                        <li><a href="#">Jolt Cola</a>
                                                        </li>
                                                        <li><a href="#">Mecca Cola</a>
                                                        </li>
                                                        <li><a href="#">Topsia Cola</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg">
                        <a href="javascript:void(0)" class="navbar-toggler shadow-none">
                            <i class="ri-menu-3-line"></i>
                        </a>
                        <div class="cr-header-buttons">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="javascript:void(0)">
                                        <i class="ri-user-3-line"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">Register</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Checkout</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Login</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="wishlist.html" class="cr1-right-bar-item">
                                <i class="ri-heart-line"></i>
                            </a>
                            <a href="javascript:void(0)" class="cr1-right-bar-item Shopping-toggle">
                                <i class="ri-shopping-cart-line"></i>
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Category <IoIosArrowDown style={{marginLeft:"5px"}}/>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">Shop Left
                                                sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Shop
                                                Right
                                                sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Full
                                                Width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Products <IoIosArrowDown style={{marginLeft:"5px"}} />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">product
                                                Left
                                                sidebar </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">product
                                                Right
                                                sidebar </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Product
                                                Full
                                                Width
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Pages <IoIosArrowDown style={{marginLeft:"5px"}}/>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Cart</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Checkout</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Track Order</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Wishlist</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Faq</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Login</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Register</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Policy</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Blog <IoIosArrowDown style={{marginLeft:"5px"}}/>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Full
                                                Width</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Detail
                                                Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Detail
                                                Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Detail
                                                Full
                                                Width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Elements <IoIosArrowDown style={{marginLeft:"5px"}}/>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">Products</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Buttons</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="cr-calling">
                        <GrPhone />
                        <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header