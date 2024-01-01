// ルート管理

import Header from "./components/Header";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from "./components/PostPage";
import CreateUser from "./components/CreateUser";

function App() {
  
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <Router>
        <Header />
      <Routes>
        <Route path="/newpost" element={<PostPage />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
