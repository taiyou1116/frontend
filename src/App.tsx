// ルート管理

import Header from "./components/Header";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from "./components/PostPage";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/newpost" element={<PostPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
