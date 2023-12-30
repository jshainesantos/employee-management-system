import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            ༼ つ ◕_◕ ༽つ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-3">
        <Outlet />
      </div>

      <footer className="bg-primary text-white text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">About</h5>
              <p className="text-white">
                This is a simple employee management application powered by
                React and Firebase.
              </p>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li className="text-white">
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="text-white">
                  <a className="text-white" href="#">
                    Contact
                  </a>
                </li>
                <li className="text-white">
                  <a className="text-white" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>
              <p className="text-white">Email: shainesantos@example.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
