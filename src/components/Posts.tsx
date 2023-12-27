
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
      {/* 配列であるpostsの username を受け取る */}
      { posts?.map((post: any) => (
        <div> { post.title + " : " + post.username } </div>
      )) }
    </div>
  )
}

export default Posts