// src/pages/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    // Điều kiện đăng nhập tạm thời: username là "admin", password là "password"
    if (username === "admin" && password === "password") {
      dispatch({ type: "LOG_IN" });
      history.push("/order"); // Chuyển hướng sau khi đăng nhập thành công
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>Login</h1>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <form onSubmit={(e) => e.preventDefault()} className='bg-light p-4'>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className='text-danger'>{error}</p>}
            <button
              type='submit'
              className='btn btn-primary w-100'
              onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
