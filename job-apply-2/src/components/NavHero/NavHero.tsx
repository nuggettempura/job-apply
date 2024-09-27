
function NavHero() {
    return (
        <div className="navHeroContainer vh-100">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container">

                    {/* Logo */}

                    <a className="navbar-brand fs-4 font-bold" href="#">volcanic</a>

                    {/* Toggle Button */}

                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Sidebar */}

                    <div className="sidebar offcanvas offcanvas-start" tabindex-1="true" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        {/* Sidebar Header */}
                        <div className="offcanvas-header text-white border-bottom">
                            <h5 className="offcanvas-title fs-3 font-bold" id="offcanvasNavbarLabel">volcanic</h5>
                            <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        {/* Sidebar Body */}
                        <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-6">
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">JOBS</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">CANDIDATES</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">CLIENTS</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">JOIN US</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">INSIGHTS</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">CONTACT US</a>
                                </li>
                            </ul>
                            {/* Login / REGISTER */}
                            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center m-0">
                                <a href="#" className="text-dark text-decoration-none px-3 py-1 d-block w-100 text-center" style={{ backgroundColor: "#F5F5F7" }}>LOGIN</a>
                                <a href="#" className="text-white text-decoration-none px-3 py-1 d-block w-100 text-center" style={{ backgroundColor: "rgb(255, 145, 0)" }}>REGISTER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="w-100 vh-100 d-flex flex-grow-1 flex-column justify-content-center align-items-center">
                <div>
                    <h1 className="text-center text-white fs-4 mb-4">
                        Accusantium doloremque quae ab ilio
                    </h1>
                </div>
                <span className="d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 p-5 pt-0">
                    <input type="text" className="d-flex m-2 mx-md-1 w-50 p-3 justify-content-center align-items-center" placeholder="KEYWORD" />
                    <input type="text" className="m-2 mx-md-1 w-50 p-3 mb-2" placeholder="LOCATION" />
                    <button className="text-white fs-6" style={{ backgroundColor: "rgb(255, 145, 0)", border: "none" }}>SEARCH JOBS</button>
                </span>
            </section>
        </div>
    )
}

export default NavHero