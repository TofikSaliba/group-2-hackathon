import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./login.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";
import Button from "../../components/button/Button";
import { usePreferences } from "../../context/Preferences.context";
import CustomInput from "../../components/customInput/CustomInput";

function Login() {
  const history = useHistory();
  const { currentUser, setCurrentUser, setToken } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setIsHome } = usePreferences();

  useEffect(() => {
    setIsHome(false);
  }, []);

  useEffect(() => {
    if (currentUser) {
      setRedirect(true);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      return setError("Password length must be at least 6");
    }
    try {
      const { data } = await userApi().post("/users/login", form);
      setCurrentUser(data.user);
      setToken(data.token);
      setForm({
        email: "",
        password: "",
      });
      localStorage.setItem("Token", data.token);
      setError("");
      history.push("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data || err.message);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <h1 className="login-title">Login</h1>
      <form className="form-body" onSubmit={handleSubmit}>
        <CustomInput
          id={"email"}
          onChange={handleChange}
          type="email"
          value={form.email}
          inputLabel="email"
          required={true}
        />
        <CustomInput
          id={"password"}
          onChange={handleChange}
          type="password"
          value={form.password}
          inputLabel="password"
          required={true}
        />
        <div className="login-button">
          <Button btnText="Login" onBtnClicked={handleSubmit}></Button>
        </div>
        <div className="error">{error}</div>
      </form>
    </div>
  );
}
export default Login;
