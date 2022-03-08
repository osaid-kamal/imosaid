import axios from "axios";
import base_url from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({});
  const handleForm = (e) => {
    console.log(contact);
    postData(contact);
    e.preventDefault();
  };
  const postData = (data) => {
    axios.post(`${base_url}/add_contact`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };
  return (
    <div id="contact">
      <div className="underline decoration-yellow-400 underline-offset-8 decoration-4 lg:ml-64 hd">
        <h4 className="font-bold ml-8 text-lg">CONTACT</h4>
      </div>
      <div className="w-full md:w-96 lg:w-3/5 lg:ml-72 md:max-w-full sm:max-w-full mx-auto mt-10">
        <div className="p-6 sm:rounded-md ml-2 lg:ml-0">
          <form method="POST" onSubmit={handleForm}>
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setContact({ ...contact, name: e.target.value });
                }}
                className="
            block
            w-full
            mt-1
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter your Name"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                onChange={(e) => {
                  setContact({ ...contact, email: e.target.value });
                }}
                className="
            block
            w-full
            mt-1
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter your Email Id"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                onChange={(e) => {
                  setContact({ ...contact, message: e.target.value });
                }}
                className="
            block
            w-full
            mt-1
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                onClick={() => toast("Thank You")}
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
