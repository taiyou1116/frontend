// ユーザーのプロフィール設定

import { useState } from "react"
import { saveImage } from "../api/postApi";
import { getCookie } from "../lib/cookieUtils";

function Profile() {
  const [image, setImage] = useState<File | null>(null);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const token = getCookie('token');
      if (!token) return;

      await saveImage(image, token);
    } catch(err) {
      console.error("エラーが発生しました" + err);
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/jpeg, image/png, image/gif" onChange={handleChangeImage}></input>
      <button type="submit">保存</button>
    </form>
  )
}

export default Profile