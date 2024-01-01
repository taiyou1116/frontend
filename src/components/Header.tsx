import { useNavigate } from "react-router-dom"
import '../App.css'

function Header() {
  let navigate = useNavigate();

  const navigateToPath = (path: string) => {
    navigate(path);
  }

  return (
    <div className=" bg-orange-200 w-auto header-height p-3 flex items-center gap-3">
      <button onClick={() => navigateToPath('/')}>
        掲示板TOP
      </button>
      <button onClick={() => navigateToPath('/newpost')}>
        投稿する
      </button>
      <button onClick={() => navigateToPath('/create-user')}>
        作成する
      </button>
    </div>
  )
}

export default Header