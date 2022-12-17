import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/logo.png';
import { forgotPasswordUser } from '../../redux/actions/userAction';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.auth);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPasswordUser(email));
    }

    return (
        <div className="forgotPassword anima">
            <form className="forgotPasswordForm" onSubmit={submitHandler}>
                <img src={Logo} alt="logo" className='app-logo' />
                <h2>B.Tech Burger Wala</h2>
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
                <button type="submit" className='btn' disabled={loading}>Send Token</button>
            </form>
        </div>
    )
}

export default ForgotPassword