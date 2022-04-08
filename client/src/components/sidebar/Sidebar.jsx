import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">GIỚI THIỆU BẢN THÂN</span>
        <img
          className="sidebarImg"
          src="https://meta.vn/Data/image/2021/10/12/hinh-anh-rose-blackpink-cute-ngau-dep-nhat-9.jpg"
          alt="About me"
        />
        <p>
          Hãy cho nhà tuyển dụng thấy bạn là người có tham vọng và định hướng
          nghề nghiệp rõ ràng. Đa số các ứng viên hiện nay đều chưa có mục tiêu
          nghề nghiệp và thường rơi vào bối rối khi bị hỏi tới. . Bạn phải biết
          bản thân đang cần gì thì mới có thể lập kế hoạch để đạt được thành
          công.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">THỂ LOẠI</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">THEO DÕI</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i class="sidebarIcon fa-brands fa-twitter"></i>
          <i class="sidebarIcon fa-brands fa-pinterest"></i>
          <i class="sidebarIcon fa-brands fa-instagram-square"></i>
          <i class="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}
