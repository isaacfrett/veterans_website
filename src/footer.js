import logo from './assets/ie_logo.png';

import './home.css';

function Footer() {
  return (
      <footer className='footer'>
        <div className='footer-cols'>
          <div className='col-left'>
            <a href="/" class="footer-logo-link"><img class="footer-logo" src={logo} alt='logo of infantry endeavors'/></a>
          </div>
          <div className='divider'>

          </div>
          <div className='col-right'>
            <a href="/mission" class="footer-link">Mission</a>
            <a href="/resources" class="footer-link">Resources</a>
            <a href="/about" class="footer-link">About</a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
