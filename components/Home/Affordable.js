import Image from 'next/image'
import Link from 'next/link';
import price from '../../src/images/price.png'


const Affordable = () => {
    return (
        <div className="container-fluid py-5">
           <div className="container py-5 my-5">
               <div className='text-center'>
                   <h2>Affordable Price!</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dolor vitae aliquet placerat ac. Arcu, mattis faucibus erat nunc enim, facilisi tellus placerat et. Sagittis viverra feugiat phasellus auctor orci odio id et. Id sed hendrerit nisl sit congue velit felis.</p>
               </div>
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <Image src={price} alt="Price" className='' />
                    </div>

                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <h4>Let's Chat For</h4>
                        <h4>A Affordable Price</h4>
                        <h4>With A Luxurius Package</h4>
                        <Link href="/contact"><button className='btn btn-primary'>Contact</button></Link>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Affordable;