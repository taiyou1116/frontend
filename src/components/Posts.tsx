
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/postApi";
import Post from "./Post";

interface Response {
  posts: PostElement[]
}

interface PostElement {
  id: number,
  user_id: number,
  title: string,
  body: string,
  username: string,
}

function Posts() {

  const [posts, setPosts] = useState<PostElement[]>([]);

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
    <div className=" flex flex-col gap-3 items-center justify-start my-5 h-screen w-screen">
      { posts?.map((post: PostElement) => (
          <Post 
            key={post.id}
            title={post.title}
            body={ post.body }
            username={ post.username }
          />
      )) }
    </div>
  )
}

export default Posts