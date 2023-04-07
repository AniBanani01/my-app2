import { Link } from "react-router-dom"

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};


export const Login=()=>{
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return(
        <section className="login">
        <div className="form">
            <h2>Login</h2>
            <form className="login-form" method="POST" onSubmit={onSubmit}>
                <input
                    type="text"
                    id="email"
                    placeholder="email" 
                    name={LoginFormKeys.Email}
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}/>
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    name={LoginFormKeys.Password}
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                />
                <button type="submit">login</button>
                <p className="message">
                    Not registered? <Link to="/register">Create an account</Link>
                </p>
            </form>
        </div>
    </section>

    )
}