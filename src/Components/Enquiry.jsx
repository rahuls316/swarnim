import React, { useState } from 'react'

const Enquiry = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        privacyAccepted: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
      };
    


  return (
    <>
    <section className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-10">
        Enquire <span className="text-black font-serif font-medium">Now</span>
      </h2>

      <form onSubmit={handleSubmit} className="border p-6 md:p-10 border-black max-w-5xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border-b border-gray-400 focus:outline-none py-2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border-b border-gray-400 focus:outline-none py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-b border-gray-400 focus:outline-none py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Id*"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b border-gray-400 focus:outline-none py-2"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border-b border-gray-400 focus:outline-none py-2"
        />

        <div className="flex items-center space-x-4">
          <input type="checkbox" name="recaptcha" required className="w-4 h-4" />
          <div className="bg-gray-100 p-2 text-xs text-gray-500 border">[reCAPTCHA widget placeholder]</div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="privacyAccepted"
            checked={formData.privacyAccepted}
            onChange={handleChange}
            required
            className="w-4 h-4"
          />
          <label>I accept the privacy policy and terms of use</label>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
            SUBMIT
          </button>
        </div>
      </form>
    </section>
    
    </>
  )
}
export default Enquiry;