import React, { useState } from "react";
import "../SignUp/Signup.css";
import axios from "axios";
function Signup() {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8004/account/register/",
        FormData
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.log("Registration Failed", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>SignUp</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="username"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name=""
            onChange={handleChange}
          />
        </div>
        <div>
          <label>FirstName</label>
          <input
            type="first_name"
            placeholder="FisrtName"
            name="first_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="last_name"
            placeholder="LastName"
            name="last_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
