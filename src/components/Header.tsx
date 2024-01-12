import { useNavigate } from "react-router-dom"
import '../App.css'
import { useStore } from "../store/store";

function Header() {
  let navigate = useNavigate();

  const userName = useStore((store) => store.userName);
  const userImage = useStore((store) => store.userImage);

  const navigateToPath = (path: string) => {
    navigate(path);
  }

  return (
    <div className=" bg-orange-200 w-auto header-height p-3 flex items-center gap-3">
      <button onClick={() => navigateToPath('/')}>
        掲示板TOP
      </button>
      { userName === "" ? 
        <button onClick={() => navigateToPath('/login')}>
          ログイン
        </button>
      : 
        <div className="flex gap-3">
          <button onClick={() => navigateToPath('/newpost')}>
            投稿する
          </button>
          <button onClick={() => navigateToPath('/register')}>
            作成する
          </button>
          <button onClick={() => navigateToPath('/profile')}>
            プロフィール設定
          </button>
          <h1>{ userName }</h1>
          <img src={userImage} alt="まだ" height={10} width={30} />
        </div>
      }
    </div>
  )
}

export default Header