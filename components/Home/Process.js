import Image from 'next/image'
import loding from '../../src/images/loding.png'

const Process = () => {
    return (
        <div className="containe-fluid py-5" style={{backgroundColor:"#FEF9F9"}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <Image src={loding} alt="Loding Dico IT" className='logo'/>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Simple Process!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. Arcu, mattis faucibus erat nunc enim, facilisi tellus placerat et. Sagittis viverra feugiat phasellus auctor orci odio id et. Id sed hendrerit nisl sit congue velit felis.</p>

                    <div className='row'>
                        <div className='col-1'><h3>1</h3></div>
                        <div className='col-11'>
                            <h3>Contact Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'><h3>2</h3></div>
                        <div className='col-11'>
                            <h3>Discuss</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'><h3>3</h3></div>
                        <div className='col-11'>
                            <h3>Place Order</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'><h3>4</h3></div>
                        <div className='col-11'>
                            <h3>Payment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                    </div>

                    <div className='mt-3'>
                        <button className='btn btn-primary me-5'><h3>Get Quote</h3></button>
                        <button className='btn btn-primary ms-5'><p>Watch Videos</p></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;