import React from 'react'

const Overview = () => {
  return (
    <>
     <section className="bg-[#3e3a4b] text-white py-16 px-8 md:px-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">Overview</p>
        <h2 className="text-4xl font-semibold leading-snug mb-6 ml-[80px] font-Montserrat">
          The Golden <br /> Life
        </h2>
        <div className='flex'>
        <div className="border-t border-gray-400 w-[84%] mb-6"></div>
        <p className="text-gray-300 leading-relaxed pl-[60px]">
          You promise yourself and your loved ones brighter opportunities, a prospering tomorrow, and a purer life. Our promise is delivering spaces that help you fulfill yours. A high-street retail project in the heart of an auspicious region, Swarnim is a landmark. And, a worthy investment for the far-sighted. When you own your part of Swarnim, you own more than just <strong className="font-bold text-white">affordable commercial shops in Gurgaon</strong>; you own a pure asset, a bright opportunity. It is your step toward the golden life.
        </p>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://www.gangarealty.com/swarnim/images/about-golden.webp"
          alt="Golden Life Commercial Shops"
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
    
    
    
    </>
  )
}
export default Overview;