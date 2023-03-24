import React from "react";
import { Link } from "react-router-dom";

export const Registeration = () => {
  return (
    <>
      <h2
        className="text-center my-5 bg-dark text-white p-1"
        style={{ verticalAlign: "middle" }}
      >
        REGISTER
      </h2>
   
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 offset-4">
            <form
              className="register border border-1 p-4 rounded-2 shadow border-secondary"
              action=""
              method=""
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Enter firstname"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter lastname"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput5"
                  className="form-label"
                >
                  email{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput5"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput6"
                  className="form-label"
                >
                  hashpassword
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput6"
                  placeholder="Enter hashpassword"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  sex
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter sex"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter address"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter phone"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  parentname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter parentname"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  DOB
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter DOB"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  DOJ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="DOJ"
                />
              </div>
              <button type="submit" className="btn btn-sm btn-primary">
                Submit
              </button>
              <span className="mx-2">
                click here to <Link to="/student-login">Login</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Registeration;
