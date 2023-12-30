import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 fw-bold">🤭Oops! Page Not Found</h1>
          <p className="lead my-4">
            The page you are looking for does not seem to exist.
          </p>
          <p className="lead">
            Perhaps you can find what you are looking for by returning to the
            <Link to="/home"> homepage </Link> or using the search bar below.
          </p>
          <form className="d-flex justify-content-center mt-4">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search..."
              aria-label="Search"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
