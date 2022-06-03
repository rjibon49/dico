import Image from 'next/image'
import bag from '../../src/images/portfolio/bag.png'
import car from '../../src/images/portfolio/car.png'
import cates from '../../src/images/portfolio/cates.png'
import headphone from '../../src/images/portfolio/headphone.png'
import seat from '../../src/images/portfolio/seat.png'
import shoe from '../../src/images/portfolio/shoe.png'
import stool from '../../src/images/portfolio/stool.png'
import watch from '../../src/images/portfolio/watch.png'

const PortfolioData = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div>
                    <h4>portfolio</h4>
                    <h3>Latest Works!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque praesent odio nam mauris proin. Suspendisse orci diam quam elementum, nisl sit volutpat elementum lobortis. Ultrices arcu eget amet blandit pretium posuere. Eget purus nullam eget vivamus porta scelerisque convallis amet. Ipsum diam libero, at scelerisque dui nulla proin rutrum. Quam sed ut purus rhoncus ut ultricies quam sed eget.</p>
                </div>

                <div className="row">
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div>
                            <Image src={watch} alt="Watch" className='' />
                        </div>
                        <div className='row'>
                            <div className="col-6">
                                <div>
                                    <Image src={cates} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={headphone} alt="Watch" className='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='row'>
                            <div className="col-6">
                                <div>
                                    <Image src={shoe} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={car} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={stool} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={bag} alt="Watch" className='' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={seat} alt="Watch" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioData;