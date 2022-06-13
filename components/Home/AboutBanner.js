import Image from 'next/image'
import center from '../../public/src/images/aboutCenter.png'
import left from '../../public/src/images/aboutLeft.png'
import right from '../../public/src/images/aboutRight.png'
import aboutImage from '../../public/src/images/aboutImage.png'


const AboutBanner = () => {
    return (
        <div className="container-fluid my-5 py-5">
            <div className="container my-5 py-5">
                <div className="" style={{position:"relative"}}>
                    <div className='text-center'>
                        {/* <Image src={left} alt="topBannerImage" className='leftImage' />
                        <Image src={center} alt="topBannerImage" className='centerImage' />
                        <Image src={right} alt="topBannerImage" className='rightImage' /> */}
                        <Image src={aboutImage} alt="topBannerImage" className='aboutImage' />
                    </div>
                    <div class="aboutPosiTion">
                        <div className='row'>
                            <div className='col-4'>
                                <p className='about'>About Us</p>
                                <p className='title'>Creative Designer Creative Website</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. </p>
                            </div>

                            <div className='col-4'></div>

                            <div className='col-4'>
                                <p className='title'>Let’s Make Something Trendy and Cool</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;