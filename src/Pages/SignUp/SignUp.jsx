import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  // Handle registration
  const handleRegister = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    const userData = {
      storedEmail: email,
      storedPassword: password,
      storedName: name,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    console.log("Registered successfully", formData);
    navigate("/");
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="model-container">
      <div className="card-title fw600">Sign up</div>
      <div className="model">
        <h3 className="model-title fw600">Sign Up</h3>

        <div className="model-input-group">
          <label className="model-label">Username</label>
          <input
            type="text"
            name="name"
            className="model-input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="model-input-group">
          <label className="-label">Email</label>
          <input
            type="text"
            name="email"
            className="-input"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="model-input-group">
          <label className="model-label">Password</label>
          <input
            type="password"
            name="password"
            className="model-input"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="-input-group">
          <label className="model-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="model-input"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        {error && <p className="model-error">{error}</p>}

        <div className="model-buttons">
          <button
            className="model-btn"
            onClick={handleRegister}
            style={{ backgroundColor: "#57d27d", color: "#594432" }}
          >
            Register
          </button>
          <button className="model-btn" onClick={handleLoginRedirect}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
