import React from "react";

const ContactPage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white  max-w-4xl w-full rounded-lg shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-2">Contact us</h2>
        <p className="text-center text-gray-600 mb-8">
          Our team is happy to answer your questions.
          <br />
          Fill out the form and we’ll be in touch as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Email + Mobile Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

         
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
