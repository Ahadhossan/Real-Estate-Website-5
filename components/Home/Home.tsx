/** @format */

import AppartmentType from './AppartmentType/AppartmentType';
import Blog from './Blogs/Blog';
import BuildingFeature from './BuildingFeature/BuildingFeature';
import CityProperties from './CityProperties/CityProperties';
import Hero from './Hero/Hero';
import Properties from './Propertie/Properties';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AppartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
