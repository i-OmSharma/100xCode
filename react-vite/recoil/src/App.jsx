
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobskAtom, messagingAtom, networkAtom, notificationkAtom } from './store/atom/Atom'

function App() {
  return (
    <RecoilRoot >
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobNotificationCount = useRecoilValue(jobskAtom)
  const notificationNotificationCount = useRecoilValue(notificationkAtom)
  const [messageNotificationCount, setMessageNotificationCount] = useRecoilState(messagingAtom)

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messages ({messageNotificationCount})</button>
      <button>Network ({notificationNotificationCount})</button>
      <button>Me</button>
      <button onClick={() => {
        setMessageNotificationCount(messageNotificationCount + 1)
      }}>Add Messages</button>
    </div>
  )
}

export default App
      