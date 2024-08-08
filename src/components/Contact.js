import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#1e4682] text-white text-center pt-4 mt-6 pb-2"
    >
      <div className="container mx-auto px-4 lg:w-[80%]">
        <div className="flex flex-col md:flex-row space-x-[10%] items-center justify-around space-y-5">
          <div className="mb-2 md:mb-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>
              <b>Phone:</b> 051 3597119
            </p>
            <p>
              <b>Email: </b>info@bahriafoundationcollege.edu.pk
            </p>
            <p>
              <b>Address: </b>Near Nadra Office Main Road Daultala, Punjab,
              Pakistan
            </p>
          </div>

          <div className="mb-2 md:mb-0">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Bahria-Foundation-College-Daultala-100072322534410/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="mb-2 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-6">
          &copy; 2024 Bahria Foundation College Daultala Campus. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
