import { useNavigate } from "react-router-dom"
import '../App.css'

function Header() {
  let navigate = useNavigate();

  const navigateToNewPost = () => {
    navigate('/newpost');
  }

  return (
    <div className=" bg-orange-200 w-auto header-height p-3 flex items-center">
      <h1>掲示板</h1>
      <button onClick={navigateToNewPost}>
        投稿する
      </button>
    </div>
  )
}

export default Header