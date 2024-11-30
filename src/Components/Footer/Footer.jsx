import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer
      style={{ backgroundColor: "#04455d" }}
      className="foot border-b-2 border-blue-300 py-6 px-20 mt-10"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between text-white">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white">About</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="cursor-pointer" onClick={() => navigate("/about")}>
                About Us
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </li>
              <li className="cursor-pointer">Gallery</li>
              <li className="cursor-pointer">Hostels</li>
            </ul>
          </div>

          {/* Blog Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white">Blog</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="cursor-pointer">Terms and Conditions</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Serenity Hostels Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white">Doozy Stays</h2>
            <p className="mt-2 text-sm">
              No. 9, Christ School Road, DRC, Post, SQ Playa, near Christ
              University, Backgate, Bengaluru, Karnataka 560029
            </p>
            <p className="cursor-pointer mt-2 text-sm">
              <span className="mr-1">✉️</span>support@doozy.in
            </p>
            <p className="cursor-pointer mt-2 text-sm flex items-center">
              <span className="mr-1">📞</span> +91 7899119911
            </p>
            <p className="mt-2 text-sm flex items-center">
              <span className="mr-1">📞</span> +91 8068171172
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
