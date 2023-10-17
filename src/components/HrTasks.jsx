import { Link } from "react-router-dom";
import collaboration from "../assets/collaboration.png";
import Navigation from "./Navigation";
function HrTasks() {
  return (
    <div className="hr-tasks">
      <Navigation number={1} />
      <img src={collaboration} alt="collaboration-img" />
      <span className="heading">
        <h1>Simplify HR Tasks</h1>
        <p>
          TexlaCulture&apos;s People Care System is designed to Manage your HR
          tasks.
        </p>
      </span>
      <Link
        style={{ textDecoration: "none" }}
        to="/get-started"
        className="btn"
      >
        Next
      </Link>
    </div>
  );
}

export default HrTasks;
