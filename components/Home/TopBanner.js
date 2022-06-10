import Image from 'next/image'
import topBannerImage from '../../public/src/images/topBannerImage.png'

const TopBanner = () => {
    return (
        <div className="container-fluid mb-5 purple" id="home">
            <div className="">
                <div className="d-flex justify-content-between">
                    <div className="pt-5 mt-5 ms-5 ps-5">
                        <h1 className="LargeContentWhite">DESIGN <br />YOUR <span className="redText">WEBSITE</span> <br /> WITH OUR <br /> <span className="redText">EXPERT DESIGNER</span></h1>
                        <p className="miniContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nam pellentesque pharetra platea arcu blandit. Risus luctus ut nullam elit maecenas. Enim aenean diam scelerisque nisi, morbi eget metus. Purus ultricies sit maecenas est massa eget vitae eget aenean.</p>
                    </div>
                    <div className="m-0 p-0">
                        <Image src={topBannerImage} alt="topBannerImage" className='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;