// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register, logout } from '../stores/authSlice';

const AuthPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleSubmit = () => {
    if (!username || !password) return;

    if (isRegisterMode) {
      dispatch(register({ username, password }));
      alert("Đăng ký thành công, vui lòng đăng nhập");
      setIsRegisterMode(false);
    } else {
      dispatch(login({ username, password }));
    }
    setUsername('');
    setPassword('');
  };

  const handleLogout = () => dispatch(logout());

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
      {!isLoggedIn ? (
        <>
          <h2 className="text-xl font-bold mb-4 text-center">
            {isRegisterMode ? 'Đăng ký tài khoản' : 'Đăng nhập'}
          </h2>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border mb-2 rounded"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {isRegisterMode ? 'Đăng ký' : 'Đăng nhập'}
          </button>
          <p
            className="mt-3 text-sm text-center text-blue-500 cursor-pointer hover:underline"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
          >
            {isRegisterMode ? 'Đã có tài khoản? Đăng nhập' : 'Chưa có tài khoản? Đăng ký'}
          </p>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Xin chào, {user.username}!</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
