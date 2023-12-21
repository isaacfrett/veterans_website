import Navbar from './navbar';
import Footer from './footer';

import "./resources.css"

function Resources() {
  return (
    <div>
      <Navbar image={false}/>
      <div className='heading'>
        <h1>Resources</h1>
      </div>
      <div className='resource-div'>
        <h2 className='resource-h2' >Work Opportunities</h2>
        <h3 className='resource-h3'><a href='https://www.dol.gov/agencies/vets' target="_blank">Veterans' Employment and Training Service</a></h3>
        <p className='resource-paragraph'>Operated by the U.S. Department of Labor, VETS focuses specifically on employment assistance for veterans.</p>
        <h3 className='resource-h3'><a href='https://www.va.gov/careers-employment/' target="_blank">U.S. Department of Veterans Affairs</a></h3>
        <p className='resource-paragraph'>The VA is a comprehensive resource for veterans, offering a wide range of services, including healthcare, benefits, education, and employment assistance.</p>
        <h3 className='resource-h3'><a href='https://www.hireheroesusa.org/' target="_blank">Hire Heroes USA</a></h3>
        <p className='resource-paragraph'>A non-profit organization dedicated to empowering veterans through job search assistance and career counseling.</p>
        <h2 className='resource-h2'>Business Endeavors</h2>
        <h3 className='resource-h3'><a href='https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses' target="_blank">U.S Small Business Administration</a></h3>
        <p className='resource-paragraph'>SBA offers resources and support for veterans interested in starting or growing their own businesses.</p>
        <h3 className='resource-h3'><a href='https://bunkerlabs.org/' target="_blank">Bunker Labs</a></h3>
        <p className='resource-paragraph'>An organization supporting veteran and military spouse entrepreneurs in launching and scaling businesses.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
