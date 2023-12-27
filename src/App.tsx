import { useEffect, useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/postApi";

interface Post {
  id: number,
  user_id: number,
  title: string,
  body: string,
  username: string,
}

interface Response {
  posts: Post[]
}

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response: Response = await fetchPosts();
        setPosts(response.posts);
      } catch(error) {
        console.error('Error fetching users:', error);
      }
    }
    getPosts();
  }, [])

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Posts />
        <div>
          {/* 配列であるpostsの username を受け取る */}
          { posts?.map((post) => (
            <div> { post.title + " : " + post.username } </div>
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
