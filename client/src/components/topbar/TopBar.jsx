import "./topbar.css"
import {Link} from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (

    <div className="top"> 
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook"></i>
          <i class="topIcon fa-brands fa-twitter"></i>
          <i class="topIcon fa-brands fa-pinterest"></i>
          <i class="topIcon fa-brands fa-instagram-square"></i>
          <i class="topIcon fa-brands fa-github"></i>
    </div>
    <div className="topCenter">
    <ul className="topList">
            <li className="topListItem">
            <Link className="link" to ="/">TRANG CHỦ</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to ="/">GIỚI THIỆU</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to ="/">LIÊN HỆ</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to ="/write">ĐĂNG</Link>
            </li>
            <li className="topListItem">
              {user &&  "THOÁT"}
            </li>

          </ul>
    </div>
    <div className="topRight">
      {
        user ? (
      <img 
          className="topImg"
          src="https://i.imgur.com/PfI0x9l.png" alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
          <Link className="link" to ="/login">ĐĂNG NHẬP</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to ="/register">ĐĂNG KÝ</Link>
          </li>
          </ul>
        )
      } 
    
          <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>


    </div>
  )
}
