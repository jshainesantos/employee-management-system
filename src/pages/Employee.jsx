/* eslint-disable react/prop-types */

function Employee({
  employeeRecord,
  deleteEmployee,
  updateEmployee,
  employeeID,
  firstname,
  lastname,
  salary,
}) {
  return (
    <>
      <div className="card mb-3 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0 card-title">
              {employeeRecord.lastname}, {employeeRecord.firstname}
              <span className="badge rounded-pill bg-success text-white ms-2">
                ₱{employeeRecord.salary}
              </span>
            </h6>
          </div>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-danger btn-sm me-2"
              onClick={() => deleteEmployee(employeeID)}
            >
              Delete
            </button>
            <button
              onClick={() =>
                updateEmployee(employeeID, firstname, lastname, salary)
              }
              type="button"
              className="btn btn-secondary btn-sm"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
