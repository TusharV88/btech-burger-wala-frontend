import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";
import { toast } from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({
                type: "clearError",
            });
        }
    }, [error, dispatch]);


    return (
        <div className="anima login">
            <form className="loginForm" onSubmit={submitHandler}>
                <img src={Logo} alt="logo" className='app-logo' />
                <h2>B.Tech Burger Wala</h2>
                <div className='inputbox'>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span>Email</span>
                    <i></i>
                </div>
                <div className='inputbox'>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>Password</span>
                    <i></i>
                </div>
                <div className='links'>
                    <Link to="/forgot/password">
                        Forgot Password?
                    </Link>
                    <Link to="/register">
                        NewUser?
                    </Link>
                </div>
                <button type="submit" className='btn' disabled={loading}>Login</button>
            </form>
        </div>
    );
};

export default Login;