import "./login.css"
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Đăng nhập</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Nhập vào email của bạn..."/>
            <label>Mật Khẩu</label>
            <input type="password" className="loginInput" placeholder="Nhập mật khẩu của bạn..."/>

            <button className="loginButton">Đăng nhập</button>
            
        </form>
        <button className="loginRegisterButton">
        <Link className="link" to ="/register">Đăng ký
        </Link>
        </button>
        
    </div>
  )
}
