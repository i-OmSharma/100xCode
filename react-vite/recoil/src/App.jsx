
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom } from './store/atom/Atom'

function App() {
  return (
    <RecoilRoot >
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ()</button>
      <button>Messages ()</button>
      <button>Network ()</button>
      <button>Me</button>
    </div>
  )
}

export default App
      