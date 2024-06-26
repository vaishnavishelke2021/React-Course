import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    address: "",
    design: false,
    development: false,
    gender: "",
    country: "",
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Your Information");
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <div className="main-container">
        <div className="c1"></div>
        <div className="c2"></div>
        <form onSubmit={submitHandler}>
          {/* ---------------------------------------------------------------------------------  */}
          <div className="box">
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                onChange={changeHandler}
                name="firstName"
                value={formData.firstName}
              />
            </div>
            <div>
              <input
                required
                type="text"
                placeholder="Last Name"
                onChange={changeHandler}
                name="lastName"
                value={formData.lastName}
              />
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------  */}
          <div className="box">
            <div>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                value={formData.email}
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="number"
                id="number"
                placeholder="Mobile number"
                onChange={changeHandler}
                value={formData.number}
              />
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------  */}
          <div>
            <textarea
            rows='4'
              name="address"
              id="address"
              placeholder="Address"
              onChange={changeHandler}
              value={formData.address}
            ></textarea>
          </div>

          {/* ---------------------------------------------------------------------------------  */}
          <div className="country">
            <label>Country: &nbsp;</label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={changeHandler}
            >
              <option value="India">India</option>+21
              <option value="America">America</option>
              <option value="England">England</option>
              <option value="Brazil">Brazil</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="North Korea">North Korea</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>
          </div>

          {/* ---------------------------------------------------------------------------------  */}
          <div>
            <h4>Interests: </h4>
            <div className="checkbox">
              <input
                type="checkbox"
                name="design"
                id="design"
                checked={formData.design}
                onChange={changeHandler}
              />
              <label htmlFor="design">Design</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="development"
                id="development"
                checked={formData.development}
                onChange={changeHandler}
              />
              <label htmlFor="development">Development</label>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------  */}
          <div>
            <h4>Gender: </h4>
            <div className="radio">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={changeHandler}
              />
              <label htmlFor="female">Female</label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={changeHandler}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formData.gender === "other"}
                onChange={changeHandler}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------  */}

         
            <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
