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
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {/* {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            Play a Game?
          </button>
        )} */}

        {/* Links to GitHub, LinkedIn, and a third platform */}
        <div className="links">
          <a
            href="https://github.com/westmarquest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark mx-2"
            onClick={() => openInNewTab("https://github.com/westmarquest")}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/marquesturner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark mx-2"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/marquesturner")
            }
          >
            LinkedIn
          </a>
          <a
            href="https://adigitprod.wixsite.com/digitproductions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark mx-2"
            onClick={() =>
              openInNewTab("https://adigitprod.wixsite.com/digitproductions")
            }
          >
            My Production Site
          </a>
        </div>
      </div>
      <div className="lf">
        <h4>&copy; {new Date().getFullYear()} - Marques Turner</h4>
      </div>
    </footer>
  );
};

export default Footer;
