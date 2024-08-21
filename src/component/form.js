import React from "react";
import "./form.css";
import './react.js';
export default function Form() {
  return (
    <>
    <div className="main">
      <div className="container1">
        <div className="tag1">
          <label>First Name</label><br />
          <input type="text" name="fname" placeholder="Enter your first name" />
        </div>
        <div className="tag2">
          <label>Birth Date</label><br />
          <input type="text" name="DOB" placeholder="Enter your DOB" />
        </div>
        <div className="tag3">
          <label>Select Gender</label><br />
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="tag4">
          <label>Job Position</label><br />
          <input type="text" name="job" placeholder="Enter your job position" />
        </div>
        <div className="tag5">
          <label>Billable Hours</label><br />
          <input type="text" name="bill" placeholder="Enter your billable hours" />
        </div>
      </div>

      <div className="container2">
        <div className="tag6">
          <label>Middle Name</label><br />
          <input type="text" name="mname" placeholder="Enter your middle name" />
        </div>
        <div className="tag7">
          <label>Email</label><br />
          <input type="text" name="email" placeholder="Enter your email" />
        </div>
        <div className="tag8">
          <label>Start Time</label><br />
          <input type="time" name="start" placeholder="Enter your start time" />
        </div>
        <div className="tag9">
          <label>Select Teams</label><br />
          <select>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
            <option value="team3">Team 3</option>
          </select>
        </div>
        <div className="tag10">
          <label>Is Billable</label>
          <input type="checkbox" />
        </div>
      </div>

      <div className="container3">
        <div className="tag11">
          <label>Last Name</label><br />
          <input type="text" name="lname" placeholder="Enter your last name" />
        </div>
        <div className="tag12">
          <label>Phone Number</label><br />
          <input type="text" name="phone" placeholder="Enter your phone number" />
        </div>
        <div className="tag13">
          <label>End Time</label><br />
          <input type="time" name="end" placeholder="Enter your end time" />
        </div>
        <div className="tag14">
          <label>Select Designation</label><br />
          <select>
            <option value="lead">Team Lead</option>
            <option value="member">Team Member</option>
            <option value="manager">Manager</option>
          </select>
        </div>
      </div>
      
    </div>
    <div className="btn">
    <button>Submit</button>
    </div>
    </>
  );
}
