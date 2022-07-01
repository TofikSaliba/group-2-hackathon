import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./register.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";
import Button from "../../components/button/Button";
import { usePreferences } from "../../context/Preferences.context";
import CustomInput from "../../components/customInput/CustomInput";

function Register(): JSX.Element {
  const history = useHistory();
  const { currentUser, setCurrentUser, setToken } = useUser();
  const [form, setForm] = useState<any>({
    email: "",
    password: "",
    name: "",
    savedLanguage: "English",
  });
  const [confirm, setConfirm] = useState<any>("");
  const [error, setError] = useState<any>("");
  const [redirect, setRedirect] = useState<any>(false);
  const { setIsHome } = usePreferences();

  useEffect(() => {
    setIsHome(false);
  }, []);

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

  const handleSubmit = async () => {
    if (confirm !== form.password) {
      return setError("Passwords do not match!");
    }
    if (form.password.length < 6) {
      return setError("Password length must be at least 6");
    }

    try {
      const { data } = await userApi().post("/users/signUp", form);
      setCurrentUser(data.newUser);
      setToken(data.token);
      setForm({
        email: "",
        password: "",
        name: "",
        savedLanguage: "English",
      });
      localStorage.setItem("Token", data.token);
      setError("");
      history.push("/");
    } catch (err: any) {
      console.log(err);
      if (err.response.data.indexOf("E11000 duplicate key") !== -1) {
        setError("Email adress is already in use!");
      } else {
        setError(err.message);
      }
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="registerFrom">
        <CustomInput
          id={"name"}
          onChange={handleChange}
          type="text"
          value={form.name}
          inputLabel="full name"
          required={true}
        />
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
        <CustomInput
          id={"confPass"}
          onChange={(e: any) => setConfirm(e.target.value)}
          type="password"
          value={confirm}
          inputLabel="confirm password"
          required={true}
        />

        <div className="language">
          <label htmlFor="savedLanguage" className="form__label">
            Language{" "}
          </label>
          <select
            onChange={handleChange}
            value={form.savedLanguage}
            id="savedLanguage"
            name="language"
          >
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Arabic">Arabic</option>
            <option value="Russian">Russian</option>
          </select>
        </div>
        <div className="register-button">
          <Button btnText="Register" onBtnClicked={handleSubmit}></Button>
        </div>
        <div className="error">{error}</div>
      </form>
    </div>
  );
}
export default Register;
