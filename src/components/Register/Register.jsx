import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Avatar from '@mui/material/Avatar';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/userAction';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAvatar(Reader.result);
            }
        };
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password, avatar));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({
                type: "clearError",
            });
        }
    }, [error, dispatch]);



    return (
        <div className="register anima">
            <form className="registerForm" onSubmit={submitHandler}>
                <img src={Logo} alt="" className='app-logo' />
                <h2 style={{ padding: "2vmax" }}>
                    B.Tech Burger Wala
                </h2>
                <Avatar
                    src={avatar}
                    alt="User"
                    sx={{ height: "10vmax", width: "10vmax", marginBottom: "3vmax" }}
                />

                <input type="file" accept="image/*" onChange={handleImageChange} />

                <div className='inputbox'>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span>Username</span>
                    <i></i>
                </div>

                <div className='inputbox'>
                    <input
                        type="mail"
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
                <div className='logbox'>
                    <h3>Already have an account?</h3>
                    <Link to="/login" >
                        Login Now
                    </Link>
                </div>
                <button type="submit" className='btn'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Register