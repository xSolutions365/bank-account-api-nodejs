import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">BankAccountUI</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy</Link>
      </nav>
    </header>
  );
};

export default Header;
