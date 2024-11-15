function Home() {
    return (
        <div className="hero-1 ot-hero-wrapper">
        <div className="container">
            <div className="hero-style1">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <h1 className="hero-title cd-headline rotate-1">
                            Creative Technologies Provided in
                            <span className="cd-words-wrapper text-theme">
                                <b className="is-visible">Taxis</b>
                                <b>Seats</b>
                            </span>
                        </h1>
                        <p className="hero-text">Scelerisque est bibendum id sed quam nisl pretium. Felis, dolor congue laoreet a, nam et ac arcu.</p>
                        <div className="brand-box">
                            <h6 className="brand-box__title">Our Partners</h6>
                            <div className="brand-box__logos">
                                <img src="/assets/img/brand/brand_1_1.png" alt="Logo"  />
                                <img src="/assets/img/brand/brand_1_2.png" alt="Logo" />
                                <img src="/assets/img/brand/brand_1_3.png" alt="Logo" />
                                <img src="/assets/img/brand/brand_1_4.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1">
                        <div className="combine-form">
                            <div className="shape1">
                                <img src="/assets/img/normal/dots_1.svg" alt="shape" />
                            </div>
                            <nav>
                                <div className="nav nav-tabs form-tab" role="tablist">
                                    <button className="nav-link" id="nav-ride-tab" data-bs-toggle="tab" data-bs-target="#nav-ride" type="button" role="tab" aria-controls="nav-ride" aria-selected="false"><i className="fas fa-car"></i> Take a Ride</button>
                                    <button className="nav-link active" id="nav-drive-tab" data-bs-toggle="tab" data-bs-target="#nav-drive" type="button" role="tab" aria-controls="nav-drive" aria-selected="true"><i className="far fa-steering-wheel"></i> Apply to Drive</button>
                                </div>
                            </nav>
                            <div className="tab-content">
                                <div className="tab-pane fade" id="nav-ride" role="tabpanel" aria-labelledby="nav-ride-tab">
                                    <form action="#" className="form1">
                                        <h3 className="form-title">Get member exclusive rewards</h3>
                                        <p className="form-text">Egestas sed vulputate eleifend ac adipiscing quisque. Hac vulputate integer sapien et.</p>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" name="lastName" id="lastName" placeholder="Last Name" />
                                            </div>
                                            <div className="form-group col-12">
                                                <input type="number" class="form-control" name="number" id="number" placeholder="Phone Number" />
                                            </div>
                                            <div class="form-group col-12">
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" />
                                            </div>
                                            <div class="form-group col-12">
                                                <input type="text" className="form-control" name="location" id="location" placeholder="City" />
                                            </div>
                                            <div className="col-12 form-group mt-3">
                                                <input type="checkbox" id="agree" />
                                                <label for="agree">I agree to the <a href="terms.html">Terms and Conditions</a> and <a href="privacy.html">Privacy Policy</a></label>
                                            </div>
                                            <div className="form-btn col-12">
                                                <button class="ot-btn">Sign up to Ride</button>
                                            </div>
                                        </div>
                                        <p className="form-messages mb-0 mt-3"></p>
                                    </form>
                                </div>
                                <div className="tab-pane fade show active" id="nav-drive" role="tabpanel" aria-labelledby="nav-drive-tab">
                                    <form action="#" className="form1">
                                        <h3 className="form-title">Start driving now and get paid</h3>
                                        <p className="form-text">Egestas sed vulputate eleifend ac adipiscing quisque. Hac vulputate integer sapien et.</p>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" name="firstName" id="firstName2" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" name="lastName" id="lastName2" placeholder="Last Name" />
                                            </div>
                                            <div className="form-group col-12">
                                                <input type="number" className="form-control" name="number" id="number2" placeholder="Phone Number" />
                                            </div>
                                            <div className="form-group col-12">
                                                <input type="email" className="form-control" name="email" id="email2" placeholder="Email Address" />
                                            </div>
                                            <div className="form-group col-12">
                                                <input type="text" className="form-control" name="location" id="location2" placeholder="City" />
                                            </div>
                                            <div className="col-12 form-group mt-3">
                                                <input type="checkbox" id="agree2" />
                                                <label for="agree2">I agree to the <a href="terms.html">Terms and Conditions</a> and <a href="privacy.html">Privacy Policy</a></label>
                                            </div>
                                            <div className="form-btn col-12">
                                                <button className="ot-btn">Become a Driver</button>
                                            </div>
                                        </div>
                                        <p className="form-messages mb-0 mt-3"></p>
                                    </form>
                                </div>
                            </div>
                        </div>
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
    )
}

export default Home;