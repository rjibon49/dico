import Image from 'next/image'
import center from '../../public/src/images/aboutCenter.png'
import left from '../../public/src/images/aboutLeft.png'
import right from '../../public/src/images/aboutRight.png'


const AboutBanner = () => {
    return (
        <div className="my-3 py-3">
            <div>
                <Image src={left} alt="topBannerImage" className='leftImage' />
                <Image src={center} alt="topBannerImage" className='centerImage' />
                <Image src={right} alt="topBannerImage" className='rightImage' />
            </div>
        </div>
    );
};

export default AboutBanner;