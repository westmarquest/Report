import { Link } from "react-router-dom";
import profileImage from "../../assets/unnamed.png";

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <Link className="text-dark" to="/">
          <h1 className="header-name" style={{ fontSize: "3rem" }}>
            Marques Turner
          </h1>
        </Link>
        <p
          className="header-tag"
          style={{ fontSize: "1.2rem", fontWeight: "700" }}
        >
          - a scriptSymphony
        </p>
      </div>
    </header>
  );
};

export default Header;
