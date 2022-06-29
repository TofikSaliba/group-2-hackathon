import axios from "axios";
import { AnyKeys } from "mongoose";
import { useState } from "react";
import userApi from "../../apis/userApi";
import "./register.css";
function Register(): JSX.Element {
    const [form, setForm] = useState<any>(
        {
            email: "",
            password: "",
            name: "",
            savedLanguage: "Choose Prefered Language",
        }
    );
    const handleChange = (e: any) => {
        console.log(e.target.value);
        setForm((prev: any) => {
            return { ...prev, [e.target.id]: e.target.value };
        });
    };
    const handleSubmit = async(e: any) => {

        e.preventDefault();
        console.log(form);
        try {
          const {data}=  await userApi().post('/users/signUp',form);
          console.log(data);
        }
        catch(err){
            console.log(err);
        }
    };

 

     


    return (
        <div className="register">
            <h1>Register</h1>
            <form className="form-body" onSubmit={handleSubmit}>
                <label htmlFor="email" className="form__label">Email </label>
                <div className="email">
                    <input onChange={handleChange} value={form.email} type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <label htmlFor="password" className="form__label">Password </label>
                <div className="password">
                    <input onChange={handleChange} value={form.password} className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <label htmlFor="name" className="form__label">User Name </label>
                <div className="username">
                    <input onChange={handleChange} value={form.name} className="form__input" type="text" id="name" placeholder="Name " />
                </div>
                <label htmlFor="savedLanguage" className="form__label">Language </label>
                <div className="language">
                    <select onChange={handleChange} value={form.savedLanguage} id="savedLanguage" name="language" >
                        <option disabled>Choose Prefered Language</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="Arabic">Arabic</option>
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
                <div className="register-button">
                    <button type="submit" className="button" >Register</button>
                </div>
            </form>

        </div>
    );
}
export default Register;