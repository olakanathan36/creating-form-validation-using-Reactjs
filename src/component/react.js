import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    DOB: "",
    email: "",
    job: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");

    if (allFieldsFilled) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const getInputClassName = (name) => {
    return submitted && formData[name].trim() === "" ? "input-error" : "";
  };

  return (
    <form className="main" onSubmit={handleSubmit}>
      <div className="container">
        <div className="tag">
          <label>First Name</label><br />
          <input
            type="text"
            name="fname"
            placeholder="Enter your first name"
            value={formData.fname}
            onChange={handleInputChange}
            className={getInputClassName("fname")}
          />
        </div>
        <div className="tag">
          <label>Last Name</label><br />
          <input
            type="text"
            name="lname"
            placeholder="Enter your last name"
            value={formData.lname}
            onChange={handleInputChange}
            className={getInputClassName("lname")}
          />
        </div>
        <div className="tag">
          <label>Birth Date</label><br />
          <input
            type="text"
            name="DOB"
            placeholder="Enter your DOB"
            value={formData.DOB}
            onChange={handleInputChange}
            className={getInputClassName("DOB")}
          />
        </div>
        <div className="tag">
          <label>Email</label><br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className={getInputClassName("email")}
          />
        </div>
        <div className="tag">
          <label>Job Position</label><br />
          <input
            type="text"
            name="job"
            placeholder="Enter your job position"
            value={formData.job}
            onChange={handleInputChange}
            className={getInputClassName("job")}
          />
        </div>
        <div className="tag">
          <label>Phone Number</label><br />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className={getInputClassName("phone")}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
