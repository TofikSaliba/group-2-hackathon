import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./login.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";

function Login(): JSX.Element {
  const history = useHistory();
  const { currentUser, setCurrentUser, setToken } = useUser();
  const [form, setForm] = useState<any>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<any>("");
  const [redirect, setRedirect] = useState<any>(false);

  useEffect(() => {
    if (currentUser) {
      setRedirect(true);
    }
  }, [currentUser]);

  // ! --------------------------------------------------------
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

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form-body" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form__label">
          Email
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
          Password
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
        <div className="login-button">
          <button type="submit" className="button">
            Login
          </button>
        </div>
        <div className="error">{error}</div>
      </form>
    </div>
  );
}
export default Login;
