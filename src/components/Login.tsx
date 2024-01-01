import { useState } from "react";
import { login } from "../api/postApi";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
        
    login(username, password);
    console.log('送信されたデータ:', { username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" h-screen flex flex-col items-center justify-center">
        <div className=" bg-slate-400 p-5 flex flex-col gap-5 w-3/5 h-5/6 items-center justify-center">
          <h1>ユーザー登録</h1>
          <input placeholder="ユーザー名" className=" w-3/5 title-height" onChange={(e) => setUsername(e.target.value)}/>
          <input placeholder="パスワード" className=" w-3/5 title-height" onChange={(e) => setPassword(e.target.value)}/>
          <button className=" bg-white py-1 px-4" type="submit">
            ログイン
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login