import Image from 'next/image'
import loding from '../../public/src/images/loding.png'

const Process = () => {
    return (
        <div className="containe-fluid py-5 orange">
            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12">
                        <Image src={loding} alt="Loding Dico IT" className='logo'/>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12 leftSpace">
                        <h2 className='title'>Simple Process!</h2>
                        <p className='subTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. Arcu, mattis faucibus erat nunc enim, facilisi tellus placerat et. Sagittis viverra feugiat phasellus auctor orci odio id et. Id sed hendrerit nisl sit congue velit felis.</p>

                        <div className='row'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>1</h3></div>
                                <div className='col-11 ps-5'>
                                    <h3 className='boldContent'>Contact Us</h3>
                                    <p className='smallContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                        </div>
                        <div className='row'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>2</h3></div>
                                <div className='col-11 ps-5'>
                                    <h3 className='boldContent'>Discuss</h3>
                                    <p className='smallContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                        </div>
                        <div className='row'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>3</h3></div>
                                <div className='col-11 ps-5'>
                                    <h3 className='boldContent'>Place Order</h3>
                                    <p className='smallContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                        </div>
                        <div className='row'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>4</h3></div>
                                <div className='col-11 ps-5'>
                                    <h3 className='boldContent'>Payment</h3>
                                    <p className='smallContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                        </div>

                        <div className='mt-3'>
                            <button className='qButton me-3'>Get Quote</button>
                            <button className='wButton ms-3'>Watch Videos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;