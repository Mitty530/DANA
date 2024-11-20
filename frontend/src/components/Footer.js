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
                                        {/* <img src="assets/img/logo.svg" alt="Carva" /> */}
                                        DANA - Smart Parking
                                    </a>
                                </div>
                                <p className="about-text">
                                    Save Time and Money when parking your car in Abu Dhabi with our smart system parking cars
                                    </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="widget footer-widget widget_nav_menu">
                            <h4 className="widget_title">Menu</h4>
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
                            <h4 className="widget_title">Functionalities</h4>
                            <div className="menu-all-pages-container">
                                <ul className="menu">
                                    <li><a href="ride.html">Shared Maps</a></li>
                                    <li><a href="drive.html">Explore Maps </a></li>
                                    <li><a href="event.html">Walking guides</a></li>
                                    <li><a href="sign-in.html">EV charges (Features)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="widget footer-widget">
                            <div className="btn-widget">
                                <a href="/find" className="ot-btn">Find Next Parking</a>
                                <a href="/Auth" className="ot-btn">Discover Now</a>
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
                        <p className="copyright">© Copyright 2024 by <a href="https:://www.dana-smartparking.com">DANA - Smart Parking</a>. All Right Reserved.</p>
                    </div>
                    <div className="col-lg-auto">
                        <div className="footer-social">
                            <a href="/twitter"><i className="fab fa-twitter"></i></a>
                            <a href="/linkedin"><i className="fab fa-linkedin"></i></a>
                            <a href="/facebook"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    )
}

export default Footer;