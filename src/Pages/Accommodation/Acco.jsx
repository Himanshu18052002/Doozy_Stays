import React from "react";
import "./styles.css";
import Form_sml from "../../Components/Contact_Us/Form_sml";

function Acco() {
  return (
    <div className="acco px-32">
      <div className="content">
        <h1 className="text-3xl">
          Doozy Stays – Premium Accommodation for Students and Professionals in
          Bangalore
        </h1>
        <p>
          Finding the ideal place to stay while studying or working in Bangalore
          can be challenging, but Doozy Stays offers everything you need for a
          comfortable and convenient living experience. Our hostel is
          strategically located near top educational institutions such as Christ
          University (SG Palya, Bannerghatta Road, and Yeshwanthpur Campus),
          Jain University, and Mount Carmel College, making it the perfect
          choice for students. With easy access to both your academic and
          professional life, Doozy Stays provides a seamless living experience.
        </p>
      </div>
      <div className="content">
        <h2 className="text-2xl">
          Accommodation at Doozy Stays – For Men, Women, and Co-Living
        </h2>
        <p>
          At Doozy Stays, we offer thoughtfully designed accommodation options
          for <strong>male and female students</strong>, as well as co-living
          spaces for those seeking a more inclusive and collaborative living
          experience. Whether you're a student attending Christ University or
          Jain University, or a working professional, our hostels are
          strategically located near key educational and business districts,
          ensuring a hassle-free commute to your campus or workplace.
        </p>
        <p>
          Our hostels are tailored to meet the diverse needs of our residents,
          with flexible rental options, premium facilities, and a peaceful
          environment that fosters both study and relaxation. Whether you're
          looking for private rooms, shared accommodations, or a co-ed living
          space, Doozy Stays provides a comfortable and secure setting for
          everyone.
        </p>
        <p>
          If you're searching for a <strong>top-quality</strong> PG or hostel in
          Bangalore, Doozy Stays offers the perfect accommodation for students
          and professionals of all backgrounds. Experience a supportive
          community, modern amenities, and a prime location, all designed to
          help you thrive in the city.
        </p>
      </div>
      <div className="content">
        <h2 className="text-2xl">Why Choose Doozy Stays?</h2>
        <p>
          Doozy Stays aren’t just places to stay—they are designed to be your
          <strong> home away from home</strong>. Whether you're looking for a
          men's PG, a luxury PG, or co-ed accommodation in Bangalore, we offer a
          range of options to suit your needs.
        </p>
        <ul>
          <li>
            <strong>Proximity to Major Campuses:</strong> We understand how
            important it is to live close to your college or workplace. Our
            hostels, located near Christ University and Jain University, offer
            easy access to your campus, making it simple to attend classes and
            engage in university activities. For students studying at Jain
            University, our male-only accommodation in Bangalore offers a
            secure, friendly environment for academic success.
          </li>
          <li>
            <strong>Premium Amenities:</strong> For those looking for the best
            PG for men or a luxury PG in Bangalore, our hostels provide top-tier
            amenities including high-speed internet, fully furnished rooms, and
            daily housekeeping services. If you prefer a more upscale
            experience, our luxury PGs for men provide a sophisticated living
            environment with premium services.
          </li>
          <li>
            <strong>Central Locations:</strong> Doozy Stays are located in some
            of Bangalore's most sought-after neighborhoods, including Vasanth
            Nagar. Our PG in Vasanth Nagar offers residents easy access to
            dining, shopping, and entertainment options, making it an ideal
            location for both work and leisure.
          </li>
          <li>
            <strong>Community Living:</strong> At Doozy Stays, we foster a
            strong sense of community. Whether you're staying in our men's
            hostel, our female-only floor, or the co-ed section, you'll find a
            supportive environment that encourages interaction and collaboration
            among like-minded individuals.
          </li>
          <li>
            <strong>Safety and Security:</strong> The safety and security of our
            residents are our top priorities. Our hostels are equipped with 24/7
            security, CCTV surveillance, and secure entry points to ensure a
            safe living space for everyone.
          </li>
        </ul>
      </div>
      <div className="form flex w-full items-center justify-end gap-3">
        <h1 className="w-1/2">
          Still Confused About Choosing the Right Hostel for Yourself?
        </h1>
        <form className="w-1/2">
          <h2>Come and Make Memories for Lifetime with Us </h2>
          <Form_sml color="#50555a" background="#cad7e3" />
        </form>
      </div>
    </div>
  );
}

export default Acco;
