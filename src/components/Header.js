import logo from '../logo.svg';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Calculator
        </div><br />
      </header>
  );
}

export default Header;
