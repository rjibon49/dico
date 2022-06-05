import logo from '../public/src/logo/DicoItLogo.png'
import Link from 'next/link';
import Image from 'next/image'
import Router from 'next/router'

const Header = () => {
   

    return (
    <>
        <div className="container-fluid navbar-light bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                        <Link href="/"><a><Image src={logo} alt="DicoIT" className='logo'/></a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item mx-2">
                                <Link href="#service">Service</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </>
    );
};

export default Header;