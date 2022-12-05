import React, { useState } from 'react'
import { Country, State } from 'country-state-city';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Shipping = () => {
    const { shippingInfo } = useSelector((state) => state.cart);

    const [hNo, setHNO] = useState(shippingInfo.hNo);
    const [city, setCity] = useState(shippingInfo.city);
    const [country, setCountry] = useState(shippingInfo.country);
    const [state, setState] = useState(shippingInfo.state);
    const [phoneNo, setPhone] = useState(shippingInfo.phoneNo);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'addShippingInfo', payload: { hNo, city, country, state, pinCode, phoneNo } });
        localStorage.setItem('shippingInfo', JSON.stringify({ hNo, city, country, state, pinCode, phoneNo }));

        navigate('/confirmorder');
    }

    return (
        <section className='shipping'>
            <main>
                <h1>Shipping Details</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>H. No.</label>
                        <input
                            type='text'
                            placeholder='Enter House No.'
                            required
                            autoComplete='nope'
                            value={hNo}
                            onChange={(e) => setHNO(e.target.value)} />
                    </div>
                    <div>
                        <label>City</label>
                        <input
                            type='text'
                            placeholder='Enter City'
                            required
                            autoComplete='nope'
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label>Country</label>
                        <select
                            required
                            autoComplete='nope'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value=''>Select Country</option>
                            {Country && Country.getAllCountries().map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {country && <div>
                        <label>State</label>
                        <select
                            required
                            autoComplete='nope'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">State</option>
                            {State &&
                                State.getStatesOfCountry(country).map((i) => (
                                    <option value={i.isoCode} key={i.isoCode}>
                                        {i.name}
                                    </option>
                                ))}
                        </select>
                    </div>}
                    <div>
                        <label>Pin Code</label>
                        <input
                            type='text'
                            placeholder='Enter Pincode No.'
                            required
                            autoComplete='nope'
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)} />
                    </div>
                    <div>
                        <label>Phone No.</label>
                        <input
                            type='tel'
                            placeholder='Enter Phone No.'
                            required
                            pattern='[0-9]{10}'
                            autoComplete='nope'
                            value={phoneNo}
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button type='submit'>Comfirm Order</button>
                </form>
            </main>
        </section>
    )
}

export default Shipping