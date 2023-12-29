
interface PostElement {
  title: string,
  body: string,
  username: string,
}

function Post(post: PostElement) {
  const { title, body, username } = post;
  return (
    <div className=" bg-slate-400 flex flex-col p-5 gap-3 w-11/12">
      <div>{ username }</div>
      <div>{ title }</div>
      <div>{ body }</div>
    </div>
  )
}

export default Post