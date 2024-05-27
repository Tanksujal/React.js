import './slider.css'
const Slider = () => {
    return(
        <>
          <div className="container-fluid">
            <div className="row">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <div className="banner-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 d-flex flex-column justify-content-center"style={{height:"500px"}}>
                                        <div className="title-slider">
                                            <h5>
                                                <span class="slider-span">100%</span>
                                                <span class="text-slider"> Organic Fruits</span>
                                            </h5>
                                        </div>
                                        <div className="deatil-slider">
                                            <h1>Explore fresh &<br></br> juicy fruits.</h1>
                                        </div>
                                        <div className="p-slider">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br> reiciendis
                                            beatae consequuntur.</p>
                                        </div>
                                        <div className="btn-slider">
                                            <button>
                                                <a href="">Shop Now</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                         <div className='banner-2'>
                         <div className="container">
                                <div className="row">
                                    <div className="col-6 d-flex flex-column justify-content-center"style={{height:"500px"}}>
                                        <div className="title-slider">
                                            <h5>
                                                <span class="slider-span">100%</span>
                                                <span class="text-slider"> Organic Fruits</span>
                                            </h5>
                                        </div>
                                        <div className="deatil-slider">
                                            <h1>Explore fresh &<br></br> juicy fruits.</h1>
                                        </div>
                                        <div className="p-slider">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br> reiciendis
                                            beatae consequuntur.</p>
                                        </div>
                                        <div className="btn-slider">
                                            <button>
                                                <a href="">Shop Now</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                </div>

            </div>
          </div>
        </>
    )
}
export default Slider