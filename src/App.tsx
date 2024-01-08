// ルート管理

import Header from "./components/Header";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from "./components/PostPage";
import Register from "./components/Register";
import Login from "./components/Login";
import { getCookie } from "./lib/cookieUtils";
import { useEffect } from "react";
import { verifyToken } from "./api/postApi";
import { useStore } from "./store/store";
import Profile from "./components/Profile";

function App() {

  const setStateOfUserName = useStore((store) => store.setUserName);

  // あとで場所変更するかも
  useEffect(() => {
    const fn = async () => {
      const token = getCookie('token');
      if (!token) return;
      try {
        const result = await verifyToken(token);
        // データを受け取る
        console.log("JWTによる解析結果: ", result);
        setStateOfUserName(result.response);
      } catch(err) {
        console.error('エラー: ', err);
      }
    }

    fn();
  }, [setStateOfUserName])
  
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/newpost" element={<PostPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
