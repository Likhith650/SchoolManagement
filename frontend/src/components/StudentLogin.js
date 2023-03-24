import React, { useState, useEffect } from "react";
import mobileapp from "../../src/stldgitlal-logo.png";
import { Link } from "react-router-dom";
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

function StudentLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [lgdata, setlgdata] = useState({});

  const submitLogin = async () => {
    const responseOptions = {
      method: "POST",
      headers: { 'Accept': "application/json","Content-Type": " application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };
    const response = await fetch("http://127.0.0.1:8005/token", responseOptions);
    const data = await response.json();
    if (!response.ok) {
      console.log({ "error": data.detail });
    } else {
      console.log(data);
      setlgdata(data);
    }
  };
  const handlelgSubmit = (e) => {
    e.preventDefault();
    submitLogin();
    // console.log("cool bro", email,password)
  };

  return (
    <div>
      <div className="background">
        <div className="login-box">
          <div className="container">
            <div class="row app-des">
              <div class="col left-background ">
                <h2>STL</h2>
                <p>Powered Likhith</p>
                <CardImg
                  className="mobile-img"
                  src={mobileapp}
                  alt="mobile-App"
                />
              </div>
              <div class="col login-form">
                <form onSubmit={handlelgSubmit}>
                  <h2 className="font-weight-bold mb-4">Student Login</h2>
                  <FormGroup>
                    <Label className="font-weight-bold mb-2">Email</Label>
                    <Input
                      className="mb-3"
                      type="email"
                      placeholder="John@example.com"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                    <Label className="font-weight-bold mb-2">Password</Label>
                    <Input
                      className="mb-3"
                      type="password"
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <Button className="mt-3  btn">Login to your account</Button>
                  <Button className="mt-3  btn">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/register"
                    >
                      register
                    </Link>{" "}
                  </Button>
                  {/* <div className="text-center m-4">or continue with social account</div>
              <GoogleLoginButton className="mt-3 mb-3 px-auto text-center"/> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
