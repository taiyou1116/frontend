import { useNavigate } from "react-router-dom"
import '../App.css'
import { useStore } from "../store/store";

function Header() {
  let navigate = useNavigate();

  const userName = useStore((store) => store.userName);

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
      <button onClick={() => navigateToPath('/register')}>
        作成する
      </button>
      <button onClick={() => navigateToPath('/login')}>
        ログイン
      </button>
      <h1>{ userName }</h1>
    </div>
  )
}

export default Header