import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Đăng Nhập</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Tài khoản</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Nhập tài khoản của bạn.."
          ref={userRef}
        />
        <label>Mật Khẩu</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Nhập mật khẩu của bạn..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Đăng Nhập
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Đăng Ký
        </Link>
      </button>
    </div>
  );
}