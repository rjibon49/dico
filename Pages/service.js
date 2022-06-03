import Layout from "../components/Layout";
import Link from 'next/link';


const Service = () => {
    return (
        <Layout>
            <h2>Servicee</h2>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
        </Layout>
    );
};

export default Service;