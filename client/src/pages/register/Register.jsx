import "./register.css"
import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password

      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
        <span className="registerTitle">Đăng ký</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Tên tài khoản</label>
            <input type="text" className="registerInput" placeholder="Nhập tài khoản của bạn..."
             onChange={(e) => setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Nhập vào email của bạn..."
             onChange={(e) => setEmail(e.target.value)}/>
      
            <label>Mật Khẩu</label>
            <input type="password" className="registerInput" placeholder="Nhập mật khẩu của bạn..."
             onChange={(e) => setPassword(e.target.value)}/>
            

            <button className="registerButton"  type="submit">Đăng ký</button>
            
        </form>
        <button  className="registerLoginButton">
        <Link className="link" to ="/login">Đăng nhập
        </Link>;
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Có lỗi gì đó rồi!</span>}
    </div>
  )
}
