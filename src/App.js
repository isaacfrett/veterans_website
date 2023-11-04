import logo from './assets/ie_logo.png';
import computer from './assets/computer.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={computer} className='background-image'></img>
        <nav class="nav">
          <a href="/" class="nav-logo-link"><img class="nav-logo" src={logo}/></a>
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link">Mission</a></li>
            <li class="nav-item"><a href="/" class="nav-link">Resources</a></li>
            <li class="nav-item"><a href="/" class="nav-link">About</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
