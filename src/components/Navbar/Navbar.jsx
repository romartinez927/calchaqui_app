import Link from "next/link"
import "./navbar.css"
import logo from "../../assets/logo_tekno.png"

export default function Navbar() {

    return (
        <nav >
            <header className="header d-none d-xl-flex flex-column">
                <div className="logo">
                    <img src={logo.src} alt="Logo Clínica Calchaqui"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li className="nav-item d-flex">
                            <span className="pb-1 pe-1"><i className="fa-solid fa-vial"></i></span>
                            <Link href="/" className="nav-link mb-0 pb-0">Alta muestra</Link>
                        </li>
                        <li className="nav-item d-flex">
                        <span className="pb-1 pe-1"><i className="fa-solid fa-vials"></i></span>
                            <Link href="/muestras" className="nav-link">Listado Muestras</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="navbar d-flex d-xl-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Clínica Calchaqui</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{border: "none"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Clínica Calchaqui</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body my-auto">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                                <li className="nav-item" data-bs-dismiss="offcanvas" >
                                    <Link href="/" className="nav-link fs-5">Alta muestra</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" >
                                    <Link href="/muestras" className="nav-link fs-5">Listado Muestras</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}