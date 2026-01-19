import { useState } from "react";

export default function CommentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });

  let handleFieldChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    addNewComment(formData);
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Give a Comment</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleFieldChange}
          placeholder="Your name"
          required
        />

        <label>Remarks</label>
        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleFieldChange}
          placeholder="Write something..."
          required
        />

        <label>Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleFieldChange}
          min={1}
          max={5}
          required
        />

        <button>Add Comment</button>
      </form>
    </div>
  );
}
