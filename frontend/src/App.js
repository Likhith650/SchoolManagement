import React from "react";
import "./App.css";
import mobileapp from "../src/stldgitlal-logo.png";
import Home from "../src/components/home";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
} from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Admin from "../src/components/admin";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/Teacherlogin";
import Registeration from "./components/Registration";


function App() {
  return (
    <div>
      <nav className="navbardiv">
        <div>
          <h1>STL DIGITAL</h1>
        </div>
        <div>
          <ul className="navul">
            <li>
              <NavLink to="/home">
                <button class="button">Home</button>
              </NavLink>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                <button class="button">About</button>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <div class="dropdown">
                  <a
                    class="btn button dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LOGIN
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/admin-login"
                        >
                          ADMIN LOGIN
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/student-login"
                        >
                          STUDENT LOGIN
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/teacher-login"
                        >
                          TEACHER LOGIN
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/login"></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h1></h1>
      </div>

      <div>
        <Routes>
          <Route to="/home" element={<Home />}></Route>
          <Route path="/admin-login" element={<Admin />}></Route>
          <Route path="/student-login" element={<StudentLogin />}></Route>
          <Route path ="/register" element ={<Registeration/>}></Route>
          <Route path="/teacher-login" element={<TeacherLogin />}></Route>
          <Route to="/about" element=""></Route>
          <Route to="/login" element=""></Route>
        </Routes>
      </div>
      <Home />
    </div>

    
  );
}

export default App;
