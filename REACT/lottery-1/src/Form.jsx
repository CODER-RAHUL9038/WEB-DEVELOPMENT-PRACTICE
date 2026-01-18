import { useState } from "react";

export default function Form() {
  let [form, setForm] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  let handleInputChange = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ fullName: "", userName: "", password: "" });
  };

  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname</label>
        <input
          id="fullname"
          type="text"
          placeholder="Fullname"
          onChange={handleInputChange}
          value={form.fullName}
          name="fullName"
        />
        <br />
        <br />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
          value={form.userName}
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={form.password}
          name="password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
