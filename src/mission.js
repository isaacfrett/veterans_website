import Navbar from './navbar';
import Footer from './footer';

function Mission() {
  return (
    <div>
      <Navbar image={false}/>
      <div className='heading'>
        <h1>Mission</h1>
      </div>
      <div className='mission-statement'>
        <p id='mission-paragraph'>
          Our mission is to empower and support veterans 
          in transitioning to civilian life by providing 
          comprehensive resources and opportunities 
          for sustainable employment and entrepreneurial ventures. 
          Through tailored programs, strategic partnerships, and 
          dedicated support, we aim to facilitate the successful 
          integration of veterans into the workforce or business 
          landscape, honoring their skills, dedication, and service 
          to our nation.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Mission;
