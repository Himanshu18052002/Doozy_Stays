import React from "react";
import "./styles.css";
import Form_sml from "../../Components/Contact_Us/Form_sml.jsx";
import Map from "../../Components/Map/Map.jsx";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const address_basic = [
  {
    icon: FaHome,
    text: "1234, Main St, Anytown, USA",
  },
  {
    icon: MdEmail,
    text: "info@yourdomain.com",
  },
  {
    icon: FaPhoneAlt,
    text: "+1 123 456 7890",
  },
];

const address_details = [
  {
    title: "Airport Shuttle",
    text: "From Kempagowda International Airport (KIA) via the accessible KIA buses that conveniently pass through Dairy Circle, situated in close proximity to our location.",
  },
  {
    title: "Ride Share",
    text: "Experience the ease of transportation with Uber, Ola, and Rapido readily available in our location. For a smooth check-in process, make your way to our head office nestled in SG Palya. ",
  },
  {
    title: "By Bus",
    text: "Muneswara Temple, Christ University Front Gate, and Dairy Circle stand as the closest bus stops, each offering convenient access to our office.",
  },
  {
    title: "By Train ",
    text: "KSR Majestic, Carmelaram, Bangalore Cantonment railway station, these are the railway stations near by.",
  },
];

const openHours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Contact() {
  return (
    <>
      <div className="contact_main">
        <div className="py-10 px-20 flex gap-6">
          <div className="w-1/2">
            <h1 className="text-3xl text-center font-semibold my-5">
              Contact Us
            </h1>
            <h3>
              Discover the ideal student living experience with us. Enjoy a
              plethora of amenities and facilities tailored to enhance your
              lifestyle. Contact us for expert guidance in selecting the perfect
              stay that aligns with your needs and preferences.
            </h3>
            <Form_sml />
          </div>
          <Map />
        </div>
      </div>
      <div className="px-32">
        <div className="flex gap-6 items-start">
          <div className="contact_box w-full p-5">
            <h2 className="text-white text-2xl text-center">Contact Info</h2>
            <div className="mt-4 ">
              {address_basic.map((item, index) => (
                <div key={index} className="flex my-3 gap-3 items-center">
                  <item.icon className="text-white text-2xl" />
                  <p className="text-white text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="contact_box_details">
            <h2 className="mt-6 text-2xl mb-4">How to Get Here ?</h2>
            <div className="contact_box_text_container grid grid-cols-2 gap-4">
              {address_details.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl my-2">{item.title}</h3>
                  <p className="text-sm text-[#7e7e7e]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="contact_box mt-10 w-full p-5">
            <h2 className="text-white text-center text-2xl">Opening Hours</h2>
          </div>
          <div className="flex p-4 items-center w-full flex-col gap-5">
            {openHours.map((item, index) => (
              <p className="text-sm text-center text-[#7e7e7e]">
                <strong className="text-base">{item}</strong> – Open 24 Hours
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
