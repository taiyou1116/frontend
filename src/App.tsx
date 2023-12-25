import { useEffect, useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/postApi";

interface Post {
  id: number,
  username: string,
  email: string,
}

interface User {
  users: Post[]
}

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response: User = await fetchPosts();
        // console.log(response);
        setPosts(response.users);
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
        <div>
          {/* オブジェクトであるpotsの"messageを受け取る"" */}
          { posts?.map((post) => (
            <div> { post.username } </div>
          )) }
        </div>
      </body>
    </div>
  );
}

export default App;
