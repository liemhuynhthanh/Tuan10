import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Step1_UseReducer from "./pages/Step1";
import Step2_Redux from "./pages/Step2_Redux";
import Step3_Toolkit from "./pages/Step3_REduxToolkit";
import "./App.css"
import "./index.css";
import CounterApp from "./pages/Counter_app";
import TodoApp from "./pages/TodoList";
import Theme from "./pages/Theme";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
const App = () => {
  const activeClass = "text-white bg-blue-600";
  const baseClass =
    "px-4 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-100 transition";

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">React State Management Steps</h1>

      {/* Menu Step */}
      <nav className="flex justify-center gap-4 mb-8">
        <NavLink
          to="/step1"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Step 1: useReducer
        </NavLink>
        <NavLink
          to="/step2"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Step 2: Redux
        </NavLink>
        <NavLink
          to="/step3"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Step 3: Redux Toolkit
        </NavLink>
        <NavLink
          to="/counterapp"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
       >    Counter App
        </NavLink>
        <NavLink
          to="/todoapp"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          } 
        >
          Todo App
        </NavLink>
        <NavLink
          to="/theme"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Theme Toggle
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Login
        </NavLink>

      </nav>

      {/* Router Outlet */}
      <Routes>
        <Route path="/step1" element={<Step1_UseReducer />} />
        <Route path="/step2" element={<Step2_Redux />} />
        <Route path="/step3" element={<Step3_Toolkit />} />
        <Route path="/counterapp" element={<CounterApp />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
