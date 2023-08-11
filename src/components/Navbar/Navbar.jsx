import Link from "next/link"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav >
            <header className="d-none d-md-flex flex-column">
                <div className="logo">
                    <img src="logo_tekno.png" alt="Logo Clínica Calchaqui"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Alta muestra</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/alta_muestra" className="nav-link">Listado Muestras</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="navbar d-flex d-md-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Clínica Calchaqui</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Clínica Calchaqui</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link href="/" className="nav-link">Alta muestra</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/alta_muestra" className="nav-link">Listado Muestras</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}