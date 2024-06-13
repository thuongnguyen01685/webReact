import React from "react";

const About = () => {
  return (
    <div className='container mt-4'>
      <h1>About Us</h1>

      <div className='row mt-4'>
        <div className='col-md-6'>
          <h3>Our History</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            porttitor, velit in convallis lobortis, dui tellus pellentesque
            quam, vel viverra justo lectus vitae elit.
          </p>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            porttitor, velit in convallis lobortis, dui tellus pellentesque
            quam, vel viverra justo lectus vitae elit.
          </p>
          <h3>Core Values</h3>
          <ul>
            <li>Customer satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Teamwork</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <h3>Our Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            porttitor, velit in convallis lobortis, dui tellus pellentesque
            quam, vel viverra justo lectus vitae elit.
          </p>
          <h3>Leadership</h3>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - COO</li>
            <li>Michael Johnson - CTO</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
