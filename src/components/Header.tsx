import { useNavigate } from "react-router-dom"

function Header() {
  let navigate = useNavigate();

  const navigateToNewPost = () => {
    navigate('/newpost');
  }

  return (
    <div className=" bg-orange-200 w-auto p-3">
      掲示板
      <button onClick={navigateToNewPost}>
        投稿する
      </button>
    </div>
  )
}

export default Header