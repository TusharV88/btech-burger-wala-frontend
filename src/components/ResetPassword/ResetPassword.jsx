import React, { useEffect, useState } from 'react'
import "./ResetPassword.css"
import Logo from "../../assets/logo.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { resetPasswordUser } from '../../redux/actions/userAction';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPasswordUser(params.token, newPassword));
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);


  return (
    <div className="restPassword">
      <form className="restPasswordForm" onSubmit={submitHandler}>
        <img src={Logo} alt="" className='app-logo' />
        <h2>B.Tech Burger Wala</h2>
        <div className='inputbox'>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span>New Password</span>
          <i></i>
        </div>
        <div className='links'>
          <Link to="/forgot/password" className='link'>
            Request Another Token!
          </Link>
          <Link to="/login" className='link'>
            Login
          </Link>
        </div>
        <button type="submit" className='btn' disabled={loading}>Reset Password</button>
      </form>
    </div>
  )
}

export default ResetPassword