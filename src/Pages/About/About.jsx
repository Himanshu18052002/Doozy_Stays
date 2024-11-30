import React from "react";
import "./styles.css";
import aboutImage from "../../assets/Images/AboutUS/about-us.jpg";
import { FaHouseUser, FaDumbbell, FaWifi, FaGamepad } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { FaCamera, FaPersonSwimming } from "react-icons/fa6";

const about_features = [
  {
    icon: FaHouseUser,
    title: "Spacious Rooms",
    des: "An abundance of open floor space, allowing for a comfortable and inviting atmosphere.",
  },
  {
    icon: IoFastFood,
    title: "In House Kitchen",
    des: "Largest kitchen with fully automated machineries to serve the safe and best food",
  },
  {
    icon: GiSofa,
    title: "Fully Furnished Rooms",
    des: "Elegantly appointed with tasteful decor and essential amenities for a seamless blend of comfort and style. ",
  },
  {
    icon: FaCamera,
    title: "Safety and Security",
    des: "Safe and secure environment with AI camera, 24*7 security and assigned wardens for each floor. ",
  },
  {
    icon: FaDumbbell,
    title: "Gym",
    des: "Modern equipments and a motivating atmosphere, providing an optimal space for fitness enthusiasts.  ",
  },
  {
    icon: FaGamepad,
    title: "Gaming Zones",
    des: "Indoor gaming zones to Immerse yourself in the ultimate entertainment experience during your leisure times. ",
  },
  {
    icon: FaWifi,
    title: "Wifi",
    des: "Stay seamlessly connected ensuring uninterrupted internet access for all your online needs. ",
  },
  {
    icon: FaPersonSwimming,
    title: "Swimming Pool",
    des: "Dive into relaxation and luxury with our pristine swimming pool facility, offering a refreshing and invigorating swim. ",
  },
];

function About() {
  return (
    <div className="mt-36 text-center px-32">
      <h2>About Us</h2>
      <div className="flex justify-center">
        <p className="about mt-8 w-3/4">
          At Serenity Hostels, our fervor lies in providing a secure
          environment, fostering a homely atmosphere, offering delightful
          culinary experiences, and ensuring a high-quality stay in close
          proximity to Bangalore’s premier universities. The myriad amenities we
          provide and the extravagance of events we orchestrate set Serenity
          apart from other hostels. With a dedicated team of staff, Serenity
          Hostels takes pride in delivering the utmost in service and solutions
          for your accommodation needs.
        </p>
      </div>
      <div className="my-20 flex justify-center items-center">
        <img className="w-2/3 rounded-lg" src={aboutImage} alt="About" />
      </div>
      <div className="about-feature">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-16">
          {about_features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <feature.icon className="text-[#0a5270] text-4xl" />
              <h3>{feature.title}</h3>
              <p className="text-xs">{feature.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
