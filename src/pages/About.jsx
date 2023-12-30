import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h1 className="display-4 fw-bold">
            About Employee Records Management
          </h1>
          <p className="lead my-4">
            This application simplifies employee record management, empowering
            you to create, read, update, and delete employee data with ease.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h2 className="h5 mb-4">Key Features:</h2>
          <ul className="list-group">
            <li className="list-group-item pt-3">
              <i className="bi bi-check-circle text-success me-2 fw-bold">✓</i> Create:
              Users can add new employees by filling in first name, last name,
              and grade fields.
            </li>
            <li className="list-group-item pt-3">
              <i className="bi bi-lock text-primary me-2 fw-bold">✓</i> Read: The
              application fetches and displays a list of existing employee
              records from Firebase.
            </li>
            <li className="list-group-item pt-3">
              <i className="bi bi-lock text-warning me-2 fw-bold">✓</i> Update: Users can
              edit existing employee records by clicking an <b>Edit</b> button.
            </li>

            <li className="list-group-item pt-3">
              <i className="bi bi-search text-danger me-2 fw-bold">✓</i> Delete: Users
              can delete employee records using a <b>Delete</b> button.
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-6">
          <Link className="btn btn-primary px-4" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
