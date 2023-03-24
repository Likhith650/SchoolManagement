import React from "react";
import mobileapp from "../../src/stldgitlal-logo.png";
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

function Admin() {
  return (
    <div style={{ overflowX: "hidden" }}>
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
                <form>
                  <h2 className="font-weight-bold mb-4">admin Login</h2>
                  <FormGroup>
                    <Label className="font-weight-bold mb-2">Email</Label>
                    <Input
                      className="mb-3"
                      type="email"
                      placeholder="John@example.com"
                    />
                    <Label className="font-weight-bold mb-2">Password</Label>
                    <Input
                      className="mb-3"
                      type="password"
                      placeholder="At least 8 characters"
                    />
                  </FormGroup>
                  <Button className="mt-3  btn">Login to your account</Button>
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

export default Admin;
