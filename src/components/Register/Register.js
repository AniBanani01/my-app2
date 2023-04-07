import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        userName:'',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (

        <section className="register">
            <div className="form">
                <h2>Register</h2>
                <form className="register-form" method="post" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="userName"
                        id="register-username"
                        placeholder="username"
                        value={values.userName}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        placeholder="repeat password"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />
                    <button type="submit">register</button>
                </form>
                    <p className="message">Already registered? <Link to="/login">Login</Link></p>
            </div>
        </section>
    )
}