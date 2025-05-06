import React from 'react';

const timelineData = [
  { title: "Delhi Mumbai", subtitle: "Industrial Corridor – 5 minutes" },
  { title: "IGI Airport", subtitle: "30 minutes" },
  { title: "G.D. Goenka School", subtitle: "5 minutes" },
  { title: "K.R. Mangalam University", subtitle: "5 minutes" },
  { title: "Medanta - The Medicity", subtitle: "15 minutes" },
  { title: "Proposed Metro", subtitle: "10 minutes" },
  { title: "Gurugram Railway Station", subtitle: "20 minutes" }
];

const Location = () => {
  return (
    <section className="bg-white text-[#3e3a4b] py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-2">Location</p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-snug ml-[80px]  mb-4">
          The Golden <br /> <span className="text-black font-normal">Location</span>
        </h2>
        <div className='flex'>
        <div className="border-t border-gray-400 w-[74%] mb-6"></div>

        <p className="text-gray-600 leading-relaxed mb-6">
          Swarnim’s position in <strong>Sector 5, Gurgaon</strong>, one of the city’s most promising sub-cities, makes it an irresistible choice for those looking to invest in <strong>commercial retail space in Gurgaon</strong>.
        </p>
    </div>
        <ul className="space-y-6 mb-8 ml-[94px]">
          {[
            {
              icon: "Located-in.svg",
              text: "Located in a bustling community of 25,000 families",
            },
            {
              icon: "Proximity-and.svg",
              text: "Proximity and easy access to Gurgaon’s city center and Delhi",
            },
            {
              icon: "Well-connected.svg",
              text: "Well-connected to all major roads",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <img
                  className="w-5 h-5"
                  src={`https://www.gangarealty.com/swarnim/images/icons/${item.icon}`}
                  alt="icon"
                />
              </div>
              <p className="font-medium">{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          Swarnim is a dream come true for investors looking for <strong>retail space in Gurgaon</strong> because here every opportunity is golden. Swarnim offers thoughtfully designed shops that promise high growth potential.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Welcome to a space where golden opportunities await.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="https://www.gangarealty.com/swarnim/images/Location-Map.webp"
          alt="Golden Location Map"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>

      {/* Timeline */}
      <div className="col-span-full mt-16 w-full overflow-x-auto">
        <div className="flex items-center border-t border-yellow-500 relative min-w-[600px] md:min-w-0">
          {timelineData.map((item, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center text-center px-4 min-w-[150px]">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-yellow-500 -mt-3 z-10"></div>
              <div className="mt-4">
                <p className="font-semibold text-sm text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
