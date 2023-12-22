import { useEffect } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/postApi";

function App() {

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetchPosts();
        console.log(res);
      } catch(error) {
        console.error('Error fetching users:', error);
      }
    }
    getPosts();
  }, [])

  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <Posts />
      </body>
    </div>
  );
}

export default App;
