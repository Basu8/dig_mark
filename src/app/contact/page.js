// "use client";
// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     alert("Your request has been submitted!");
//   };

//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold text-blue-600">Contact Us</h1>
//       <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//         <input className="w-full p-2 border rounded" type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//         <input className="w-full p-2 border rounded" type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <textarea className="w-full p-2 border rounded" placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
//         <button className="p-2 bg-blue-500 text-white rounded" type="submit">Send Message</button>
//       </form>
//     </main>
//   );
// }


"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Icons from react-icons

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
  };

  return (
    <main className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form (Left Side) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details and Map (Right Side) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600">Our Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <p className="text-gray-700">123 Digital Marketing Street, Suite 456, New York, NY 10001</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-500 text-xl" />
                <p className="text-gray-700">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <p className="text-gray-700">info@digitalmarketingagency.com</p>
              </div>
            </div>
          </div>

          {/* Map Integration */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Location</h2>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792927342!2d-73.98773168459413!3d40.74844047932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629999999999!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}