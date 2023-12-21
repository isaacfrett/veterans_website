
import './home.css';
import Navbar from './navbar';
import Footer from './footer';
import computer from './assets/computer.jpg'

function Home() {
  return (
    <div>
      
      <Navbar image={true}/>
      <h1 id='site-name'>
        Infantry 
        Endeavors
      </h1>
      <div className='middle-body'>
        <p id='slogan'>
          Helping Veterans With Their Next Endeavor
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
