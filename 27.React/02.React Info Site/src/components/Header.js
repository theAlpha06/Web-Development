import logo from '../images/logo.svg';

function Header(){
    return (
      <header className='header'>
        <nav className='nav'>
          <img src = {logo} className="nav-logo" alt="logo"/>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header;