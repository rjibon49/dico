import Image from 'next/image'
import center from '../../public/src/images/aboutCenter.png'
import left from '../../public/src/images/aboutLeft.png'
import right from '../../public/src/images/aboutRight.png'
import aboutImage from '../../public/src/images/aboutImage.png'


const AboutBanner = () => {
    return (
        <div className="container my-5 py-5" id='about'>
            <div className=" my-5 py-xl-5 py-lg-0">
                <div className="" style={{position:"relative"}}>
                    <div className='text-center'>
                        {/* <Image src={left} alt="topBannerImage" className='leftImage' />
                        <Image src={center} alt="topBannerImage" className='centerImage' />
                        <Image src={right} alt="topBannerImage" className='rightImage' /> */}
                        <Image src={aboutImage} alt="topBannerImage" className='aboutImage' />
                    </div>
                    <div className="aboutPosiTion">
                        <div className='row'>
                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                                <div className='ps-xl-2 ps-lg-2'>
                                    <p className='about'>About Us</p>
                                    <p className='title'>Creative Designer Creative Website</p>
                                    <p className='boldContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. </p>
                                </div>
                            </div>

                            <div className='col-4'></div>

                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                                <div className='ps-xl-2 ps-lg-2'>
                                    <p className='title'>Let’s Make Something Trendy and Cool</p>
                                    <p className='boldContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;