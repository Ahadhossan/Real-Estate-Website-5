import React from "react";
import SectionHeading from '@/components/Helper/SectionHeading'
import CitySlider from './CitySlider'

const CityProperties = () => {
  return (
      <div className="pt-16 pb-16 ">
          <div className="w-[80%] mx-auto">
              <SectionHeading heading='Explor City Properties' />
              {/* citySlider */}
              <div className="mt-10 md:mt-16">
                <CitySlider />
              </div>
          </div>
      </div>
  )
}

export default CityProperties