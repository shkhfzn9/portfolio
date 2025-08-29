import React, { useRef, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = ({ id }) => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_z0anwkf", // replace with your EmailJS service ID
        "template_lauv1f6", // replace with your EmailJS template ID
        form.current,
        "Al_vtxn5_ZjitWw2Y" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Email error:", error.text);
          toast.error("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id={id} className="py-20 bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          description="Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Your email address"
                />
              </div>

              {/* <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Message subject"
                />
              </div> */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center px-6 py-3 rounded-lg shadow-md transition duration-300 ${
                  isLoading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a
                      href="mailto:sheikh.faizan@example.com"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      sheikh.faizan.w@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Srinagar,Kashmir</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {/* <a
                  href="https://github.com/faizan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-github"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/sheikh-faizan-4a9a29326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://x.com/shkhfzn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-x"></i>
                </a>

                <a
                  href="https://github.com/shkhfzn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
