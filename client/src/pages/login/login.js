import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./login.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";
import Button from "../../components/button/Button";

function Login() {
    const history = useHistory();
    const { currentUser, setCurrentUser, setToken } = useUser();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

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
                    <Button
                        btnText="Login"
                        onBtnClicked={handleSubmit}
                    ></Button>
                </div>
                <div className="error">{error}</div>
            </form>
        </div>
    );
}
export default Login;
