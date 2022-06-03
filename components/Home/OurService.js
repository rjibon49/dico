import Image from 'next/image'
import ui from '../../src/images/UiUX-Design.png'
import web from '../../src/images/Web-Design.png'
import app from '../../src/images/App-Design.png'
import product from '../../src/images/Product-Design.png'
import video from '../../src/images/Video-Editing.png'


const OurService = () => {
    return (
        <div className="container-fluid py-5" style={{backgroundColor:"#FFD439"}}>
           <div className="container py-5 my-5">
                <div className="row py-5">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Our Service</h4>
                        <h2>We Offer A Wide Range</h2>
                        <h2>Of Services And Provide</h2>
                        <h2>Complete Client Satisfication</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. Arcu, mattis faucibus erat nunc enim, facilisi tellus placerat et. Sagittis viverra feugiat phasellus auctor orci odio id et. Id sed hendrerit nisl sit congue velit felis.</p>

                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-4">
                                <div className='text-center'>
                                    <Image src={ui} alt="Ui/Ux Design" className='' />
                                    <h4>Ui/Ux Design</h4>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='text-center'>
                                    <Image src={web} alt="Ui/Ux Design" className='' />
                                    <h4>Web Design</h4>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='text-center'>
                                    <Image src={video} alt="Ui/Ux Design" className='' />
                                    <h4>Video Editing <br /> & <br />Explainer Video</h4>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='text-center'>
                                    <Image src={app} alt="Ui/Ux Design" className='' />
                                    <h4>App Design</h4>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='text-center'>
                                    <Image src={product} alt="Ui/Ux Design" className='' />
                                    <h4>Product Design</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default OurService;