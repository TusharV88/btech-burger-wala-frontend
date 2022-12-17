import React, { useState as UseState, useEffect as UseEffect } from 'react'
import { motion } from 'framer-motion';
import burger from '../../assets/burger.png';
import { useDispatch as UseDispatch, useSelector as UseSelector } from 'react-redux';
import { getContact } from '../../redux/actions/userAction';
import toast from 'react-hot-toast';


const contact = () => {
    const [name, setName] = UseState('');
    const [email, setEmail] = UseState('');
    const [msg, setMsg] = UseState('');
    const { error, message } = UseSelector(state => state.contact);

    const dispatch = UseDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getContact(name, email, msg));
        setName('');
        setEmail('');
        setMsg('');
    }

    UseEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({type: "clearError"});
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [error, message])


    return (
        <section className='contact anima'>
            <motion.form
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onSubmit={submitHandler}
            >
                <h2>Contact</h2>
                <input required type='text' name='name' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input required type='email' name='name' id='name' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <textarea required cols='30' rows='10' placeholder='Message...' style={{ resize: "none" }} value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                <button type='submit' className='anima'>Send</button>
            </motion.form>
            <motion.div className='formBorder'
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    initial={{ y: '-100vh', x: '50%', opacity: 0 }}
                    animate={{ y: '-50%', x: '50%', opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <img src={burger} alt="burger" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default contact