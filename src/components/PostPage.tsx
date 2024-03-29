// 新しい投稿を作成するページ

import { useState } from "react";
import { submitPost } from "../api/postApi";
import { getCookie } from "../lib/cookieUtils";

function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = getCookie('token');
    if (!token) return;
    
    await submitPost(title, content, token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" h-screen flex flex-col items-center justify-center">
        <div className=" bg-slate-400 p-5 flex flex-col gap-5 w-3/5 h-5/6 items-center justify-center">
          <h1>新しい投稿</h1>
          <input placeholder="タイトル" className=" w-3/5 title-height" onChange={(e) => setTitle(e.target.value)}/>
          <textarea placeholder="投稿内容" className=" w-3/5 h-3/5 resize-none" onChange={(e) => setContent(e.target.value)}/>
          <button className=" bg-white py-1 px-4" type="submit">
            投稿
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostPage