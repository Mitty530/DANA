
function Header() {
    
    return (
        <header className="ot-header header-layout1">
            <div className="sticky-wrapper">
                <div className="sticky-active">
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <a href="index.html">
                                            <img src="/assets/img/logo.svg" alt="Carva" /></a>

                                    </div>
                                </div>
                                <div className="col-auto ms-auto">
                                    <nav className="main-menu">
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="ride.html">Ride</a></li>
                                            <li><a href="drive.html">Drive</a></li>
                                            <li className="menu-item-has-children">
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <ul className="sub-menu">
                                                            <li><a href="dashboard-overview.html">Dashboard Overview</a></li>
                                                            <li><a href="dashboard-drivers.html">Dashboard Driver</a></li>
                                                            <li><a href="dashboard-passengers.html">Dashboard Passengers</a></li>
                                                            <li><a href="dashboard-payout.html">Dashboard Payout</a></li>
                                                            <li><a href="dashboard-trips.html">Dashboard Trips</a></li>
                                                            <li><a href="driver-overview.html">Driver Overview</a></li>
                                                            <li><a href="driver-message.html">Driver Message</a></li>
                                                            <li><a href="driver-trips.html">Driver Trips</a></li>
                                                            <li><a href="driver-trip-details.html">Driver Trip Details</a></li>
                                                            <li><a href="driver-settings.html">Driver Settings</a></li>
                                                            <li><a href="driver-vehicle.html">Driver Vehicles</a></li>
                                                            <li><a href="passenger-overview.html">Passenger Overview</a></li>
                                                            <li><a href="passenger-message.html">Passenger Message</a></li>
                                                            <li><a href="passenger-trips.html">Passenger Trips</a></li>
                                                            <li><a href="passenger-trip-details.html">Passenger Trip Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li><a href="faq.html">Faq Page</a></li>
                                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                                    <li><a href="ride-on-web.html">Ride On Web</a></li>
                                                    <li><a href="rider-sign-up.html">Rider Sign Up</a></li>
                                                    <li><a href="driver-sign-up.html">Driver Sign Up</a></li>
                                                    <li><a href="terms.html">Terms & Conditions</a></li>
                                                    <li><a href="sitemap.html">Sitemap</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="event.html">Events</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="sign-in.html">Log In</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-auto">
                                    <div className="header-button">
                                        <a href="sign-up.html" className="ot-btn style2">Get Started</a>
                                        <button type="button" className="ot-menu-toggle d-inline-block d-lg-none"><i className="fal fa-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;