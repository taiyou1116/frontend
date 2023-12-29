
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/postApi";

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


function Posts() {

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
      ホーム画面
      { posts?.map((post: any) => (
        <div key={post.id}> { post.title + " : " + post.username } </div>
      )) }
    </div>
  )
}

export default Posts