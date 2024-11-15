function Footer() {
    
    return (
        <footer className="footer-wrapper ">
        <div className="widget-area">
            <div className="container">
                <div className="row justify-content-start justify-content-lg-between">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="widget footer-widget">
                            <div className="ot-widget-about">
                                <div className="about-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.svg" alt="Carva" />
                                    </a>
                                </div>
                                <p className="about-text">15 Street No, Ox Building, Near Station, NewYork 1356 USA.</p>
                                <h3 className="footer-info-title">Toll Free <span className="text-theme">Helpline</span></h3>
                                <a href="tel:+11234567890" className="footer-link">(+1) 123 4567 890</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="widget footer-widget widget_nav_menu">
                            <h4 className="widget_title">Quick Links</h4>
                            <div className="menu-all-pages-container">
                                <ul className="menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="terms.html">Terms</a></li>
                                    <li><a href="privacy.html">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="widget footer-widget widget_nav_menu">
                            <h4 className="widget_title">Products</h4>
                            <div className="menu-all-pages-container">
                                <ul className="menu">
                                    <li><a href="ride.html">Ride</a></li>
                                    <li><a href="drive.html">Drive</a></li>
                                    <li><a href="event.html">Events</a></li>
                                    <li><a href="sign-in.html">Log In</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="widget footer-widget">
                            <div className="btn-widget">
                                <a href="rider-sign-up.html" className="ot-btn">Sign Up to Ride</a>
                                <a href="driver-sign-up.html" className="ot-btn">Become a Driver</a>
                                <a href="ride-on-web.html" className="ot-btn">Ride on Web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright-wrap">
                <div className="row justify-content-between">
                    <div className="col-lg-auto">
                        <p className="copyright">© Copyright 2024 by <a href="https://wrapbootstrap.com/user/themeleaf">Tortoiz Themes</a>. All Right Reserved.</p>
                    </div>
                    <div className="col-lg-auto">
                        <div className="footer-social">
                            {/* <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    )
}

export default Footer;