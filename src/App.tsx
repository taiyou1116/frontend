import Header from "./components/Header";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from "./components/PostPage";

function App() {
  
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/newpost" element={<PostPage />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
