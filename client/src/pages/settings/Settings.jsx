import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Cập nhật tài khoản</span>
          <span className="settingsDeleteTitle">Xóa tài khoản</span>
        </div>
        <form className="settingsForm">
          <label>Ảnh đại diện</label>
          <div className="settingsPP">
            <img src="https://i.imgur.com/PfI0x9l.png" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Tài khoản</label>
          <input type="text" placeholder="tuankyle2408" />
          <label>Email</label>
          <input type="text" placeholder="vidu@email.com" />
          <label>Mật khẩu</label>
          <input type="password" placeholder="********"/>
          <button className="settingsSubmit">Cập nhật</button>
        </form>

      </div>
      <Sidebar />
    </div>
  );
}
