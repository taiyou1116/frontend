
type PostElement = {
  title: string,
  body: string,
  username: string,
  replies: Reply[],
}

type Reply = {
  username: string,
  userimage: string,
  body: string,
}

function Post(post: PostElement) {
  const { title, body, username, replies } = post;
  return (
    <div className=" flex flex-col w-11/12 gap-1">
      <div className=" bg-slate-400 p-5">
        <div>{ username }</div>
        <div>{ title }</div>
        <div>{ body }</div>
      </div>

      {/* replyの表示 */}
      { replies.map((r) => (
        <div className=" bg-gray-500 p-1">{ r.body }</div>
      )) }
    </div>
  )
}

export default Post