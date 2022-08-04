import React from 'react';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';
import Product from '../components/Product';
import { client } from '../lib/client';

const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className="products-container">
      {
        products?.map(product => <Product key={product._id} product={product} />)
      }
    </div>
    <FooterBanner footerBanner = {bannerData.length && bannerData[0]} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const bannerQuery = '*[_type == "banner"]';
  const products = await client.fetch(query);
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
     products, bannerData
    }
  }
}