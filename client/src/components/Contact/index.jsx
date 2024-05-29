import React, { useState } from "react";

const ContactForm = () => {
  // State variables to store form data and validation errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    // If there are validation errors, set them in state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no errors, submit the form (you can handle this part later)
      console.log("Form submitted:", formData);
      // Reset form data and errors
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  // Function to validate email address using regex
  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
