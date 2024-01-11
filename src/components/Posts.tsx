
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/postApi";
import Post from "./Post";
import { useStore } from "../store/store";

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
  const img = useStore((store) => store.userImage);

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
      <img src={img} alt="まだ" />
    </div>
  )
}

export default Posts