import logo from './assets/ie_logo.png';
import computer from './assets/computer.jpg'

import './home.css';

function NavImage({image}) {
  if (image) {
    return (
      <img src={computer} className='background-image' alt='laptop in the background'></img>
    )
  }
  else {
    return (  
      <div class="nav" style={{backgroundImage: "linear-gradient(to right,#131414, #3F4040)", maxHeight: "10em", height: "10em"}}/>
    )
  }
}

export default function Navbar({image}) {
  return (
    <div className="App">
      <NavImage image={image}/>
      <div class="nav">
        <a href="/" class="nav-logo-link"><img class="nav-logo" src={logo} alt='logo of infantry endeavors'/></a>
        <div class="nav-right">
          <a href="/mission" class="nav-link">Mission</a>
          <a href="/resources" class="nav-link">Resources</a>
          <a href="/about" class="nav-link">About</a>
        </div>
      </div>
    </div>
  );
};
