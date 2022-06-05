import Image from 'next/image'
import Link from 'next/link';
import design from '../../public/src/images/redesign.png'


const RedesignNote = () => {
    return (
        <div className="container-fluid py-5">
           <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Let's</h4>
                        <h4>redesign Your Brand</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque praesent odio nam mauris proin. Suspendisse orci diam quam elementum, nisl sit volutpat elementum lobortis. Ultrices arcu eget amet blandit pretium posuere. Eget purus nullam eget vivamus porta scelerisque convallis amet. Ipsum diam libero, at scelerisque dui nulla proin rutrum. Quam sed ut purus rhoncus ut ultricies quam sed eget.</p>
                    </div>

                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <Image src={design} alt="Price" className='' />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default RedesignNote;