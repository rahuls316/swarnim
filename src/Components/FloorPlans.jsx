import React from 'react'

const floorPlans = [
    {
      title: 'SAPPHIRE - I',
      subtitle: 'Tathastu - I, Sector 05, Sohna',
      image: 'https://www.gangarealty.com/swarnim/images/floorplan/Sapphire-I.png', // Replace with actual image path
    },
    {
      title: 'SAPPHIRE - II',
      subtitle: 'Tathastu - I, Sector 05, Sohna',
      image: 'https://www.gangarealty.com/swarnim/images/floorplan/Sapphire-II.png', // Replace with actual image path
    },
  ];

const FloorPlane = () => {
  return (
    <>
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Floor Plan</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-snug ml-[77px]">
            The Golden <br />
            <span className="font-serif font-medium text-black">Floor</span>
          </h2>
        </div>
        <button className="bg-black text-white text-xs px-4 py-2 uppercase tracking-widest hover:bg-gray-800">
          Master Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {floorPlans.map((plan, index) => (
          <div key={index} className="bg-[#3B3846]">
            <img src={plan.image} alt={plan.title} className="mx-auto mb-4" />
            {/* <h3 className="text-white text-sm font-semibold tracking-wider">{plan.title}</h3>
            <p className="text-gray-300 text-xs mt-1">{plan.subtitle}</p> */}
            {/* <div className="border-b border-gray-500 mt-2" /> */}
          </div>
        ))}
      </div>
    </section>
    
    
    </>
  )
}
export default FloorPlane;