import Category from "../Components/category"
import Contact from "../Components/contact"
import Counter from "../Components/counter"
import Header from "../Components/header"
// import Navbar from "../Components/navbar"
import Order from "../Components/order"
import People from "../Components/people"
import Popular from "../Components/popular"
import Product from "../Components/product"
import Service from "../Components/service"
import Slider from "../Components/slider"
import Testimoinal from "../Components/testimoinal"

const Menu = () => {
    return(
        <>
          
          <Header/>
          <Slider/>
          <Product/>
          <Category/>
          <Order/>
          <Service/>
          <Counter/>
          <Popular/>
          <People/>
          <Testimoinal/>
          <Contact/>
        </>
    )
}
export default Menu