import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Please Enter Username";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  return errors;
};

export default function CommentForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: "",
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm();
    },
  });

  // let handleFieldChange = (e) => {
  //   setFormData((prevForm) => ({
  //     ...prevForm,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   addNewComment(formData);
  //   console.log(formData);
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: "",
  //   });
  // };

  return (
    <div className="form-container">
      <h2>Give a Comment</h2>

      <form onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Your name"
        />
        {formik.touched.username && formik.errors.username && (
          <div style={{ color: "red" }} className="error">
            {formik.errors.username}
          </div>
        )}
        <label>Remarks</label>
        <textarea
          name="remarks"
          onChange={formik.handleChange}
          value={formik.values.remarks}
          placeholder="Write something..."
        />

        <label>Rating</label>
        <input
          type="number"
          name="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
          min={1}
          max={5}
          required
        />

        <button>Add Comment</button>
      </form>
    </div>
  );
}
