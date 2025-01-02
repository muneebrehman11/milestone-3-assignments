// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     title: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here, like sending data to an API or email service
//     alert("Form Submitted!");
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-300 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Input */}
//           <div>
//             <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Your Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Your Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Title Input */}
//           <div>
//             <label htmlFor="title" className="block text-lg text-gray-700 mb-2">Message Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
//               placeholder="Subject or title"
//               required
//             />
//           </div>

//           {/* Message Textarea */}
//           <div>
//             <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Your Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
//               placeholder="Write your message here"
//               rows={6}
//               required
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none transition-all duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

'use client'

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here, you can handle form submission logic (e.g., send the form data to an API)
    // For now, we're just simulating a delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-xl p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Contact Us</h2>
        <p className="text-center text-gray-600">
          We would love to hear from you! Please fill out the form below to get in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Title Field */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="mt-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
                isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
            >
              {isSubmitting ? "Submitting..." : "Submit Message"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}



