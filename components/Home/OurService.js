import Image from 'next/image'
import ui from '../../src/images/UiUX-Design.png'
import web from '../../src/images/Web-Design.png'
import app from '../../src/images/App-Design.png'
import product from '../../src/images/Product-Design.png'
import video from '../../src/images/Video-Editing.png'


const OurService = () => {
    return (
        <div id='service' className="container-fluid py-5">
           <div className="container py-5 my-5">
                <div className="row py-5" style={{alignItems:"center"}}>
                    <div className="col-xl-5 col-md-12 col-sm-12 col-xs-12">
                        <h4 className='midContent'>Our Service</h4>
                        <h2 className='secoundTitle'>We Offer A Wide Range</h2>
                        <h2 className='secoundTitle'>Of Services And Provide</h2>
                        <h2 className='secoundTitle'>Complete Client Satisfication</h2>
                        <p className='subTitle pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. Arcu, mattis faucibus erat nunc enim, facilisi tellus placerat et. Sagittis viverra feugiat phasellus auctor orci odio id et. Id sed hendrerit nisl sit congue velit felis.</p>

                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="row" style={{alignItems:"center"}}>
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={ui} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>Ui/Ux Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={web} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>Web Design</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={app} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>App Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={product} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>Product Design</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                            <div className="col-xl-3 col-md-6 col-sm-12 col-xs-12">
                                <div className=" ">
                                    <div className='text-center rightContentVideo'>
                                        <div className='squareSpace'>
                                            <Image src={video} alt="Ui/Ux Design" className='' />
                                            <h4 className='rightContent'>Video Editing <br /> & <br />Explainer Video</h4>
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