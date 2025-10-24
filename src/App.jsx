import React, { useState } from 'react';
import './App.css';

export default function FeedbackForm() {
  const maxFeedbackLength = 200;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //max character limit for feedback
    if (name === "feedback" && value.length > maxFeedbackLength) return;

     setFormData({
       ...formData,
       [name]: value
     });
  };

  return (
    <section className="card">
      <h1 className="title">User Feedback</h1>
      <form className="form">
        <label className="field">
          <span>Name: </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            
          />
        </label>

        <label className="field">
          <span>Email: </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            
          />
        </label>

        <label className="field">
          <span>Feedback: </span>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
        </label>

      </form>

      <div className="preview">
        <h2>Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
      </div>
    </section>
  );
}

