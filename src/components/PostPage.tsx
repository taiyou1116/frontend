
function PostPage() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className=" bg-slate-400 p-5 flex flex-col gap-5 w-3/5 h-5/6 items-center justify-center">
        <h1>新しい投稿</h1>
        <input placeholder="タイトル" className=" w-3/5 title-height"/>
        <textarea placeholder="投稿内容" className=" w-3/5 h-3/5 resize-none"/>
      </div>
    </div>
  )
}

export default PostPage