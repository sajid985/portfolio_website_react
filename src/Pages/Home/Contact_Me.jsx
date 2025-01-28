import { useState } from "react";

export default function Contact_Me() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      })

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setTimeout(() => setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        }), 100);
    };
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
        </div>
        <form action="https://formspree.io/f/xyzkwedb" className="contact--form--container" method="post" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="firstName" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="lastName" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="phoneNumber" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phoneNumber"
                id="phone-number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
                className="contact--input text-md"
                id="message"
                name="message"
                rows="8"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }