import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <div class="jumbotron text-center bg-body-tertiary">
        <div class="container-fluid py-3 jumboCopy" id="aboutbox">
          <h2>About Me</h2>
          <p class="lead col-md-12 fs-5">
            My name is Janyalom Rahman. Friends and colleagues call me Jan/Jon/Alom - take your pick! I live in the
            United Kingdom, London, Camden, and I am 33 years old. I currently work as a Success Manager at LaunchGood,
            which involves account management and support. I previously worked as a Deputy Head Teacher in an
            independent secondary school. As a graduate of Computer Science, I have rekindled my love for tech by
            reintroducing and enrolling myself in a Front End Web Developer boot camp. Ready for new challenges and
            opportunities.
          </p>
          <img src="Images/me.jpg" alt="Picture of Janyalom Rahman" class="img-fluid rounded-circle" width="300" />
        </div>
      </div>
    </div>
  );
};

export default About;
