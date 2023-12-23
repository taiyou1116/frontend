import { useEffect, useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/postApi";

interface Post {
  message: string,
}

function App() {

  const [posts, setPosts] = useState<Post | null>();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response: Post = await fetchPosts();
        setPosts(response);
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
        <p>
          {/* オブジェクトであるpotsの"messageを受け取る"" */}
          { posts ?  posts["message"] : "" }
        </p>
      </body>
    </div>
  );
}

export default App;
