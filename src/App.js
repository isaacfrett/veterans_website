import logo from './assets/ie_logo.png';
import computer from './assets/computer.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <img src={computer} className='background-image' alt='laptop in the background'></img>
      <div class="nav">
        <a href="/" class="nav-logo-link"><img class="nav-logo" src={logo} alt='logo of infantry endeavors'/></a>
        <div class="nav-right">
          <a href="/" class="nav-link">Mission</a>
          <a href="/" class="nav-link">Resources</a>
          <a href="/" class="nav-link">About</a>
        </div>
      </div>
      <div className='middle-body'>

      </div>
      <div className='lower-body'>

      </div>
      <footer className='footer'>
        <div className='footer-cols'>
          <div className='col-left'>
            <a href="/" class="footer-logo-link"><img class="footer-logo" src={logo} alt='logo of infantry endeavors'/></a>
          </div>
          <div className='divider'>

          </div>
          <div className='col-right'>
            <a href="/" class="footer-link">Mission</a>
            <a href="/" class="footer-link">Resources</a>
            <a href="/" class="footer-link">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
