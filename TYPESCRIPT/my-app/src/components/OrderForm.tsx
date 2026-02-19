import { useState } from "react";

interface loginFormData {
  name: String;
  email: string;
}

const OrderForm = () => {
  let [formData, setFormData] = useState<loginFormData>({
    name: "",
    email: "",
  });

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof loginFormData]: value,
    }));
  };

  let handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderForm;
