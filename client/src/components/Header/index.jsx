import { Link } from "react-router-dom";
import profileImage from "../../assets/unnamed.png";
import logoImage from "../../assets/profcutout.png";
import Nav from "../../pages/Nav";

const Header = () => {
  return (
    <header className="bg-info">
      <div className="hdcontainer flex-column justify-space-between-lg justify-center align-center text-center">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="header-name">
          <h1 className="header-name1">Marques Turner</h1>
          <img src={logoImage} alt="Logo" className="logo-image" />
          <a
            href="https://www.adigitprod.com"
            target="_blank"
            rel="noopener noreferrer"
            class="emoji-link"
          >
            🎥
          </a>
          <p className="header-tag">- a scriptSymphony</p>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
