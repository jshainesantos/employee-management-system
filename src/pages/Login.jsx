import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid py-5 mt-5 lead">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow rounded-3">
            <div className="card-body">
              <h1 className="text-center display-5 fw-bold mb-5">
                Welcome Back!
              </h1>
              <form>
                <div className="mb-3 ">
                  <label htmlFor="email" className="form-label">
                    Email address:
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mb-2"
                >
                  Sign Up
                </button>
              </form>
              <Link to="/register">No account? Register here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
