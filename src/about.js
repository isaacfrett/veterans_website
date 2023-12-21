import Navbar from './navbar';
import Footer from './footer';

import headshot from "./assets/isaac.jpg";

function About() {
  return (
    <div>
      <Navbar image={false}/>
      <div className='heading'>
        <h1>About</h1>
      </div>
      <div className='about-div'>
        <img src={headshot} className='headshot'></img>
        <h2 id='full-name'>Isaac Frett</h2>
        <p id='about-paragraph'>Hello! I'm Isaac, and at the time of writing 
          I'm currently a student that's driven by a passion for 
          helping veterans and military personnel. 
          As a senior at Bellevue University, 
          I envisioned creating a website to aid 
          veterans in there search for employment 
          opportunities and to help them start businesses.
          As of now the website is bare but I've complied some 
          resources and websites as a means to pool information 
          for those visiting the site. In the future I'd like to 
          add in more resources and functionailty to the site to 
          further help vistors find employment through resume help,
          interview tips, and actual job postings. I further want
          to include guides to help those starting businesses, and 
          tips for those in active duty transitioning to civilian life.
          I hope something here helps you in your search for a new 
          endeavor. Thanks!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
