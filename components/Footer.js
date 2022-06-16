import Link from 'next/link';
import Image from 'next/image'
import cell from '../public/src/images/celphone.png'
import map from '../public/src/images/map.png'
import mail from '../public/src/images/mail.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faPinterestP,
    faTwitter,
    faFacebookF
  } from '@fortawesome/free-brands-svg-icons';
  import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="container-fluid purple py-5">
            <div className="container">
                <div className="row my-5">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight:"50px"}}>
                        <div>
                            <h1 className="yellowText LargeContent">Build</h1>
                            <h1 className="yellowText LargeContent">Your Agency</h1>
                            <p className="subTitleWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque praesent odio nam mauris proin. Suspendisse.</p>
                        </div>

                        <form class="subscription">
                            <input class="add-email" type="email" placeholder="Your Business E-mail...." />
                            <button class="submit-email" type="button">
                                <span class="before-submit">Hire Now</span>
                                <span class="after-submit">Thank you for subscribing!</span>
                            </button>
                        </form>

                        <div className='pb-5 text-center mt-5'>
                            <FontAwesomeIcon icon={faFacebookF} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faInstagram} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faPinterestP} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faTwitter} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faPlay} className="socialIconFooter" />
                            <div className='mt-4'>
                                <p className='subTitleWhite'>English (US)</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-xl-2 col-lg-1 col-md-12 col-sm-12 col-xs-12 d-lg-none d-xl-block"> </div>

                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <nav className="navbar navbar-expand mb-5 d-lg-none d-xl-block">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 me-5">
                                    <li className="nav-item mx-2">
                                        <Link href="#home"><a className='menuLinkWhite'>Home</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="#about"><a className='menuLinkWhite'>About Us</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="#portfolio"><a className='menuLinkWhite'>Portfolio</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="#service"><a className='menuLinkWhite'>Service</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="/contact"><a className='menuLinkWhite'>FAQ</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div>
                            <p className="text-center subTitleWhite">contact Us</p>
                            
                            <div className='row'>
                                <div className='col-3'></div>
                                    <div className='col-1 iconBg'>
                                        <Image src={cell} alt="DicoIT"/>
                                    </div>
                                    <div className='col-8'>
                                        <p className='subTitleWhite ps-4'>+00 123-456789</p>
                                </div>
                                <div className='col-3'></div>
                                    <div className='col-1 iconBg'>
                                        <Image src={map} alt="DicoIT"/>
                                    </div>
                                    <div className='col-8'>
                                        <p className='subTitleWhite ps-4'>yourmail@gmail.com</p>
                                    </div>
                                <div className='col-3'></div>
                                    <div className='col-1 iconBg'>
                                        <Image src={mail} alt="DicoIT"/>
                                    </div>
                                    <div className='col-8'>
                                        <p className='subTitleWhite ps-4'>1968 Massachusetts Avenue <br /> Washington, DC 20005</p>
                                    </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="subTitleWhite">Copyright @ 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;