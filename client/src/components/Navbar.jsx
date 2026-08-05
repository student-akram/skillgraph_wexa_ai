import { Link } from "react-router-dom";
import { BrainCircuit, House, Briefcase } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">

        <div className="logo-icon">
          <BrainCircuit size={34} />
        </div>

        <div>
          <h2>SkillGraph AI</h2>

          <p>
            Build your career roadmap using Graph Database Technology
          </p>
        </div>

      </div>

      <div className="nav-links">

        <Link to="/">
          <House size={18} />
          Home
        </Link>

        <Link to="/roles">
          <Briefcase size={18} />
          Roles
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;