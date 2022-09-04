import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import valid from '../utils/valid';
import { DataContext } from '../store/GlobalState';

function Register() {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const [state, dispatch] = useContext(DataContext);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) {
      return dispatch({ type: "NOTIFY", payload: { error: errMsg } })
    }
    dispatch({ type: "NOTIFY", payload: { success: "OK" } })
  }

  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>

      <form className='mx-auto my-4' style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
        <h3 className='text-center'>Please Register</h3>
        <div className="form-group">
          <label htmlFor="userName">Full Name</label>
          <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={handleChangeInput} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={handleChangeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="cf_password">Confirm Password</label>
          <input type="password" className="form-control" id="cf_password" name='cf_password' value={cf_password} onChange={handleChangeInput} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <p className='my-2'>Already have an account?
          <Link href="/signin"><a style={{ color: 'crimson' }}> Please Login</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Register