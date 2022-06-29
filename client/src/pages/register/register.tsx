import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./register.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";

function Register(): JSX.Element {
  const history = useHistory();
  const { currentUser, setCurrentUser, setToken } = useUser();
  const [form, setForm] = useState<any>({
    email: "",
    password: "",
    name: "",
    savedLanguage: "Choose Prefered Language",
  });
  const [error, setError] = useState<any>("");
  const [redirect, setRedirect] = useState<any>(false);

  useEffect(() => {
    if (currentUser) {
      setRedirect(true);
    }
  }, [currentUser]);

  const handleChange = (e: any) => {
    setForm((prev: any) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.savedLanguage === "Choose Prefered Language") {
      return setError("Must choose prefered language");
    }
    try {
      const { data } = await userApi().post("/users/signUp", form);
      setCurrentUser(data.newUser);
      setToken(data.token);
      setForm({
        email: "",
        password: "",
        name: "",
        savedLanguage: "Choose Prefered Language",
      });
      setError("");
      history.push("/");
    } catch (err: any) {
      console.log(err);
      if (err.response.data.indexOf("E11000 duplicate key") !== -1) {
        setError("Email adress is already in use!");
      }
    }
  };

  console.log(currentUser);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form-body" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form__label">
          Email{" "}
        </label>
        <div className="email">
          <input
            onChange={handleChange}
            value={form.email}
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            required
          />
        </div>
        <label htmlFor="password" className="form__label">
          Password{" "}
        </label>
        <div className="password">
          <input
            onChange={handleChange}
            value={form.password}
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <label htmlFor="name" className="form__label">
          Name{" "}
        </label>
        <div className="username">
          <input
            onChange={handleChange}
            value={form.name}
            className="form__input"
            type="text"
            id="name"
            placeholder="Name "
            required
          />
        </div>
        <label htmlFor="savedLanguage" className="form__label">
          Language{" "}
        </label>
        <div className="language">
          <select
            onChange={handleChange}
            value={form.savedLanguage}
            id="savedLanguage"
            name="language"
          >
            <option disabled>Choose Prefered Language</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Arabic">Arabic</option>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
          </select>
        </div>
        <div className="register-button">
          <button type="submit" className="button">
            Register
          </button>
        </div>
        <div className="error">{error}</div>
      </form>
    </div>
  );
}
export default Register;
