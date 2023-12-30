import { useState, useEffect } from "react";
import Employee from "../pages/Employee";
import firebaseApp from "../pages/firebaseConfig";

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function Home() {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    salary: "",
  });

  const [employeeList, setEmployeeList] = useState([]);

  const [editToggle, setEditToggle] = useState(false);

  useEffect(() => {
    const db = getFirestore(firebaseApp);

    try {
      onSnapshot(collection(db, "employees"), (snapshot) => {
        const newEmployeeList = [];

        snapshot.forEach((employee) => {
          const tempEmployee = employee.data();
          tempEmployee["employee_id"] = employee.id;
          newEmployeeList.push(tempEmployee);
        });
        setEmployeeList(newEmployeeList);
      });
    } catch (e) {
      alert("Could not fetch employee data!");
    }
  }, []);

  const addEmployee = () => {
    const db = getFirestore(firebaseApp);

    if (
      employee.firstname === "" ||
      employee.lastname === "" ||
      employee.salary === ""
    ) {
      alert("Field cannot be empty");
    } else {
      setEmployeeList((employeeList) => [...employeeList, employee]);
      setEmployee({
        firstname: "",
        lastname: "",
        salary: "",
      });
      addDoc(collection(db, "employees"), employee);
    }
  };

  const deleteEmployee = async (employeeID) => {
    const db = getFirestore(firebaseApp);
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (userConfirmed) {
      try {
        await deleteDoc(doc(db, "employees", employeeID));
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  const updateEmployee = (employeeID, firstname, lastname, salary) => {
    setEditToggle(true);

    setEmployee({
      employeeID: employeeID,
      firstname: firstname,
      lastname: lastname,
      salary: salary,
    });
  };

  const handleUpdateEmployee = () => {
    const db = getFirestore(firebaseApp);
    const employeeRef = doc(db, "employees", employee.employeeID);

    updateDoc(employeeRef, {
      firstname: employee.firstname,
      lastname: employee.lastname,
      salary: employee.salary,
    });

    setEditToggle(false);
    setEmployee({
      firstname: "",
      lastname: "",
      salary: "",
    });
  };

  return (
    <>
      <div className="container-md mt-5 lead">
        <h1 className="fw-bold text-center display-4 fw-bold mb-3">
          ‍ Employee Dashboard
        </h1>{" "}
        <p className="text-center lead">A list of employee records.</p>
        <hr />
        <form className="row g-3 mb-4">
          <div className="col-md-5">
            <label htmlFor="firstname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Juan"
              aria-label="First Name"
              value={employee.firstname}
              onChange={(e) =>
                setEmployee({ ...employee, firstname: e.target.value })
              }
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="lastname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Dela Cruz"
              aria-label="Last Name"
              value={employee.lastname}
              onChange={(e) =>
                setEmployee({ ...employee, lastname: e.target.value })
              }
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="salary" className="form-label">
              Salary:
            </label>
            <input
              type="number"
              className="form-control"
              id="salary"
              placeholder="99999"
              aria-label="salary"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          {editToggle ? (
            <div className="col-12 col-md-5 col-lg-3 d-grid gap-2">
              <button
                type="button"
                className="btn btn-success  mb-5"
                onClick={handleUpdateEmployee}
              >
                Update
              </button>
            </div>
          ) : (
            <div className="col-12 col-md-5 col-lg-3 d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary mb-5"
                onClick={addEmployee}
              >
                Add
              </button>
            </div>
          )}
        </form>
        <h3>EMPLOYEES</h3>
        <hr />
        {employeeList.map((employeeRecord) => (
          <Employee
            key={employeeRecord.id}
            firstname={employeeRecord.firstname}
            employeeRecord={employeeRecord}
            lastname={employeeRecord.lastname}
            salary={employeeRecord.salary}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
            employeeID={employeeRecord.employee_id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
