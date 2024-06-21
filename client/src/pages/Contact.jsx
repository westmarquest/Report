import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("https://formspree.io/f/xdknnkwb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setAlert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        setAlert("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <div>
      <h1 className="contact-header">Contact Me</h1>
      <form action="https://formspree.io/f/xdknnkwb" method="POST">
        <div className="cont-name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="cont-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="cont-mess">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
