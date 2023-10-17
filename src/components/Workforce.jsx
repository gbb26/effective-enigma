import { Link } from "react-router-dom";
import TaskMgmt from "../assets/task-management.png";
import Navigation from "./Navigation";
function Workforce() {
  return (
    <div className="workforce">
      <Navigation number={2} />
      <img src={TaskMgmt} alt="collaboration-img" />
      <span className="heading">
        <h1>Empower Your Workforce</h1>
        <p>
          With TexlaCulture&apos;s Employee Management System, unleash the true
          potential.
        </p>
      </span>
      <Link
        style={{ textDecoration: "none" }}
        to="/mobile-number"
        className="btn"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Workforce;
