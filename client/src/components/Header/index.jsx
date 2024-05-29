import { Link } from "react-router-dom";
import profileImage from "../../assets/unnamed.png";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="hdcontainer flex-column justify-space-between-lg justify-center align-center text-center">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div class="header-name">
          <h1 className="header-name1">Marques Turner</h1>
          <p className="header-tag">- a scriptSymphony</p>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
