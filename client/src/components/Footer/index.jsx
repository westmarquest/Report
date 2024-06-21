import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to open a link in a new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <footer className="w-100 mt-auto p-4">
      <div className="container text-center mb-5">
        <div className="links">
          <button
            className="btn btn-dark btn-custom-border mx-5"
            onClick={() => openInNewTab("https://github.com/westmarquest")}
            style={{ textShadow: "1px 1px 1px #888787" }}
          >
            GitHub
          </button>
          <button
            className="btn btn-dark mx-1"
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/createwithmarques?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvkAJ6s2USEeHcBVkfn5%2Bog%3D%3D"
              )
            }
            style={{ textShadow: "1px 1px 1px #888787" }}
          >
            LinkedIn
          </button>
          <button
            className="btn btn-dark mx-3"
            onClick={() =>
              openInNewTab("https://adigitprod.wixsite.com/digitproductions")
            }
            style={{ textShadow: "1px 1px 1px #888787" }}
          >
            My Production Site
          </button>
        </div>
      </div>
      <div className="lf" style={{ marginBottom: "120px" }}>
        <h4 className="custom-h4">
          &copy; {new Date().getFullYear()} - Marques Turner
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
