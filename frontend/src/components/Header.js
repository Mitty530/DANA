
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
                                        <a href="/" className="h4">
                                            {/* <img src="/assets/img/logo.svg" alt="Carva" /> */}
                                            DANA - Smart Parking
                                        </a>


                                    </div>
                                </div>
                                <div className="col-auto ms-auto">
                                    <nav className="main-menu">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/guide">Guide</a></li>
                                            <li><a href="/features">Features</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-auto">
                                    <div className="header-button">
                                        <a href="/auth" className="ot-btn style2">
                                            Log In / Sign Up
                                        </a>
                                        <button type="button" className="ot-menu-toggle d-inline-block d-lg-none"  >
                                            <i className="fal fa-bars"></i>
                                        </button>
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