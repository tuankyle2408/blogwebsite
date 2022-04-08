import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://avatar-ex-swe.nixcdn.com/singer/cover/2020/06/15/2/3/c/3/1592190809540.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
              <input type="file"  id="fileInput" style={{display: "none"}}/>
              <input type="text" placeholder="Tiêu đề...." className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
              <textarea placeholder="Kể về câu truyện của bạn...." type="text" className="writeInput  writeText">

              </textarea>
            </div>
            <button className="writeSubmit">
               Đăng
            </button>
        </form>

    </div>
  )
}
