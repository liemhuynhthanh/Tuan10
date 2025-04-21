// src/main.jsx (hoặc src/index.jsx nếu dùng CRA)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  // ✅ Import Provider từ react-redux
import store from './stores/store';       // ✅ Import store của Redux

import App from './App';  // Import App của bạn
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* ✅ Bọc App trong Provider */}
      <BrowserRouter>
        <App />  {/* Render App */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
