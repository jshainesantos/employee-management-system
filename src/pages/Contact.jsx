function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h1 className="display-4 fw-bold">Get in Touch</h1>
          <p className="lead my-4">
            Have questions or need assistance? We are here to help!
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card border-0 shadow rounded-3">
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label">
                    Your message:
                  </label>
                  <textarea
                    id="contactMessage"
                    rows="3"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
              <ul className="list-unstyled mt-4">
                <li>
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  email@example.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  +639-123-456-789
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
