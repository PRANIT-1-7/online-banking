import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container">
      <div className="form">
          <h1>Register</h1>
          <div>
            <label>Email</label>
            <input type="email" placeholder="enter email id"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="enter password"/>
          </div>
          <div>
            <label> confirm Password</label>
            <input type="password" placeholder="confirm password"/>
          </div>
          <button>Register</button>
          <p>
            Already have an account?  <Link to="/">Log in</Link>
          </p>
      </div>
    </div>
  );


}

export default Register;