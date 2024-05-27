import { useState } from "react"
import { Sliders } from "./data"
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
const Simple = () => {
    const [currentIndex,setcurrentIndex] = useState(0)
    const sliderstyle = {
        background : `url(${Sliders[currentIndex].img})`,
        height : "100%",
        backgroundPosition : "center",
        backgroundSize:"cover"
    }
    const containers = {
        height : "300px",
        width:"100%",
        position : "relative"
    }
    const leftarrow = {
        position : "absolute",
        top:"50%",
        transform: 'translate(0,-50%)',
        left:"32px",
        fontSize:"45px",
        color:"fff",
        zIndex : 1,
        cursor : "pointer"
    }
    const  rightarrow = {
        position : "absolute",
        top:"50%",
        transform: 'translate(0,-50%)',
        right:"-90%",
        fontSize:"45px",
        color:"fff",
        zIndex : 1, 
        cursor : "pointer"
    }
    const goToprevoius = () => {
        const isFirstSlide = currentIndex === 0 ;
        const newIndex = isFirstSlide ? Sliders.length-1 : currentIndex-1;
        setcurrentIndex(newIndex)
    }
    const goTonext = () => {
        const isLastSlide  = currentIndex === Sliders.length-1;
        const newIndex = isLastSlide?0:currentIndex+1
        setcurrentIndex(newIndex)
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row" style={containers}>
                    <div style={leftarrow} onClick={ () => goToprevoius()}><BiLeftArrowAlt /></div>
                    <div style={rightarrow} onClick={ () => goTonext()}><BiRightArrowAlt /></div>
                    <div style={sliderstyle}></div>
                </div>
            </div>
        </>
    )
}
export default Simple