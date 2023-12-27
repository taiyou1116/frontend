
interface Response {
  posts: any,
}

function Posts(p: Response) {
  const { posts } = p;

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