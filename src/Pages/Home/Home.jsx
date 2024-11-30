import React from "react";
import "./styles.css";
import homePage from "../../assets/HOME-PAGE.png";
import Features from "./components/Features";

function Home() {
  return (
    <div className=" px-32">
      <div className="flex gap-2 items-center justify-between homePage">
        <div className="-ml-8 w-2/4">
          <h1 className="heading">
            Doozy Stay's Luxury Hostel in Bangalore is Re-defining the Industry{" "}
          </h1>
          <p className="content">
            Embark on a new journey in hostel living, offering a unique and
            enhanced experience. Discover a lifestyle unlike any other,
            redefining your expectations of shared accommodations. Immerse
            yourself in unprecedented comfort and amenities that set our hostel
            apart. Experience a level of hospitality that goes beyond the
            ordinary.
          </p>
          <div className="numberContainer flex items-center gap-4 w-full">
            <input className="w-2/3" type="tel" placeholder="Contact Number" />
            <button>Book Now</button>
          </div>
        </div>
        <div className="imageContainer">
          <img className="w-full" src={homePage} alt="home-page" />
        </div>
      </div>
      <div className="text-center mb-10">
        <h2 className="mb-5">
          <span style={{ color: " #115691" }}>Experience</span> The Comfort with
          Best Hostels in Bangalore
        </h2>
        <p>WHERE COMFORT, COMMUNITY AND CREATIVITY INTERWINES. </p>
      </div>
      <Features
        direction={""}
        colorHeading={"Experience the buzz -"}
        heading={
          "hostel events that never cease to amaze at Best Hostels in Bangalore"
        }
        description={
          "Serenity Hostels are bustling hubs of vibrant activity, offering an array of engaging events. From high energy sports tournaments, soul stirring musical nights to festival celebrations and events. Serenity creates a vibrant and inclusive atmosphere for all its tenants."
        }
      />
      <div className="my-36">
        <Features
          direction={"reverse"}
          heading={"Hostel Life, Upgraded: Where Every "}
          colorHeading={"Amenity Adds at Our PG/Hostel in Bangalore"}
          description={
            "Serenity Hostels are bustling hubs of vibrant activity, offering an array of engaging events. From high energy sports tournaments, soul stirring musical nights to festival celebrations and events. Serenity creates a vibrant and inclusive atmosphere for all its tenants."
          }
        />
      </div>
      <Features
        direction={""}
        heading={
          "Cozy space and endless tales at Our PG Hostel in Bangalore for Boys, Girls, and Professionals"
        }
        description={
          "Serenity Hostels are bustling hubs of vibrant activity, offering an array of engaging events. From high energy sports tournaments, soul stirring musical nights to festival celebrations and events. Serenity creates a vibrant and inclusive atmosphere for all its tenants."
        }
      />
      <div className="my-36">
        <Features
          direction={"reverse"}
          heading={"Bringing the Comfort of Home to "}
          colorHeading={" Every Plate at Our Best Hostels in Bangalore"}
          description={
            "Serenity Hostels are bustling hubs of vibrant activity, offering an array of engaging events. From high energy sports tournaments, soul stirring musical nights to festival celebrations and events. Serenity creates a vibrant and inclusive atmosphere for all its tenants."
          }
        />
      </div>
      <Features
        colorHeading={"Safe Stay: Your Peace of Mind "}
        heading={"in Every Room of Our Safest Women Hostel in Bangalore"}
        description={
          "Serenity Hostels are bustling hubs of vibrant activity, offering an array of engaging events. From high energy sports tournaments, soul stirring musical nights to festival celebrations and events. Serenity creates a vibrant and inclusive atmosphere for all its tenants."
        }
      />
    </div>
  );
}

export default Home;
