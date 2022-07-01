import { useEffect } from "react";
import "./contact.css";
import { useState } from "react";
import Button from "../../components/button/Button";
import userApi from "../../apis/userApi";
import CustomInput from "../../components/customInput/CustomInput";
import { usePreferences } from "../../context/Preferences.context";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
  const [submitMsg, setSubmitMsg] = useState("");
  const { setIsHome } = usePreferences();

  useEffect(() => {
    setIsHome(false);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userApi().post("/contact/submit", form);
      setForm({
        fullName: "",
        subject: "",
        email: "",
        comments: "",
      });
      setSubmitMsg("Success! we will get back to you soon.");
    } catch (err) {
      console.log(err.message);
      setSubmitMsg(err.response.data || err.message);
    }
  };

  return (
    <div className="mainContainer">
      <h1>CONTACT US! &nbsp;</h1>
      <form onSubmit={handleSubmit} action="#">
        <CustomInput
          id="FullName"
          onChange={handleChange}
          type="text"
          value={form.fullName}
          inputLabel="Full Name"
          required={true}
        />
        <CustomInput
          id="Subject"
          onChange={handleChange}
          type="text"
          value={form.subject}
          inputLabel="Subject"
          required={true}
        />
        <CustomInput
          id="email"
          onChange={handleChange}
          type="email"
          value={form.email}
          inputLabel="email"
          required={true}
        />
        <div className="input-container">
          <label className={form.description && "filled"} htmlFor="description">
            description
          </label>
          <textarea
            id="description"
            onChange={handleChange}
            value={form.description}
            required={true}
          />
        </div>
        <Button
          btnText="Submit"
          onBtnClicked={handleSubmit}
          className="form-btn"
        ></Button>

        <div>{submitMsg}</div>
      </form>
    </div>
  );
}
