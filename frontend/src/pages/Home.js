
function Home() {
    return (
        <>
            <div className="hero-1 ot-hero-wrapper">
                <div className="container">
                    <div className="hero-style1">
                        <h4 className="hero-title cd-headline rotate-1 text-center mt-4">
                            Reserve Your Parking  <span className="cd-words-wrapper text-theme">
                                <b className="is-visible">Now</b>
                                <b className="is-hidden">Save</b>
                            </span>
                        </h4>
                        <div className="row align-items-center mb-3">
                            <div className="col-xl-8 offset-2 ">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="destination" id="destination" placeholder="Address, Place, City" />
                                        <button className="btn btn-primary" type="submit"><i className="fas fa-location-dot"></i>  Search </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="row align-items-center mb-3">
                            <div className="col-xl-6 offset-5 mt-3">
                                <button className="ot-btn style2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                    </svg> &nbsp;
                                    Parking near to me
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="hero-img">
                    {/* <img src="/assets/img/normal/hero_img_1.jpg" alt="Hero Image" /> */}
                </div>
                <div className="hero-shape1">
                    <img src="/assets/img/normal/dots_2.svg" alt="dots" />
                </div>
                <div className="shape-group position-2">
                    <div className="shape shape1"></div>
                    <div className="shape shape2"></div>
                    <div className="shape shape3"></div>
                </div>
            </div>
            {/* section 2 */}
            <section id="feature-icons-id" className="css-kh6mfs py-5 bg-light">
                <div className="container">
                    <h2 className="text-center fw-bold text-primary mb-5">How DNA - Smart Parking Works</h2>
                    <div className="row text-center gy-4">
                        <div className="col-md-4">
                            <div className="p-4 ride-box rounded-10">
                                <div className="mb-3 text-primary">
                                    <i className="bi bi-search fs-1"></i>
                                </div>
                                <h3 className="fw-semibold">Explore</h3>
                                <p className="text-muted">
                                    Find and compare affordable parking locations across the Abu Dhabi .
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 ride-box rounded-10">
                                <div className="mb-3 text-primary">
                                    <i className="bi bi-credit-card fs-1"></i>
                                </div>
                                <h3 className="fw-semibold">Reserve</h3>
                                <p className="text-muted">
                                    Securely book your spot and receive instant confirmation via email
                                    or app.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 ride-box rounded-10">
                                <div className="mb-3 text-primary">
                                    <i className="bi bi-car-front-fill fs-1"></i>
                                </div>
                                <h3 className="fw-semibold">Arrive</h3>
                                <p className="text-muted">
                                    Follow your instructions, park your car, and enjoy your time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className="space position-relative overflow-hidden">
        <div className="container">
            <div className="row space-bottom wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-xl-5 col-lg-6">
                    <div className="img-box2">
                        <div className="img1">
                            <img src="/assets/img/normal/feature_1.jpg" alt="feature" />
                        </div>
                    </div>
                </div>
                <div className="offset-xl-1 col-lg-6">
                    <div className="title-area mb-4">
                        <span className="subtitle">Safety</span>
                        <h2 className="sec-title">Our Safety Protocol</h2>
                    </div>
                    <p className="mb-30">Tristique tortor dui morbi eu. Nullam ornare lorem gravida amet lacus, ut. Eget aenean volutpat diam ullamcorper at nunc lorem gravida.</p>
                    <a href="about.html" className="ot-btn">Learn More</a>
                </div>
            </div>
            <div className="row flex-row-reverse space-extra-top wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-xl-5 col-lg-6 offset-xl-2">
                    <div className="img-box3">
                        <div className="img1">
                            <img src="/assets/img/normal/feature_2.jpg" alt="feature" />
                        </div>
                        <div className="shape1">
                            <img src="/assets/img/normal/dots_1.svg" alt="dot shape" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="title-area mb-4">
                        <span className="subtitle">Vaccine access fund</span>
                        <h2 className="sec-title">Support Our Vaccine <br /> Access Fund</h2>
                    </div>
                    <p className="mb-30">Vel enim tortor arcu mi ut aliquam ultrices. Nunc, sit turpis nisl cursus mauris pretium massa elit.</p>
                        <a href="#" className="ot-btn" >Donate</a>
                </div>
            </div>
        </div>
        <div className="shape-group position-3">
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
        </div>
    </section>
        </>
    )
}

export default Home;