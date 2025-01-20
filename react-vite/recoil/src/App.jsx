
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './store/atom/Atom'

function App() {
  return (
    <RecoilRoot >
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobNotificationCount = useRecoilValue(jobsAtom)
  const notificationNotificationCount = useRecoilValue(notificationAtom)
  // const [messageNotificationCount, setMessageNotificationCount] = useRecoilState(messagingAtom)
  const setMessageNotificationCount = useSetRecoilState(messagingAtom)
  const messageNotificationCount = useRecoilValue(messagingAtom )
  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messages ({messageNotificationCount})</button>
      <button>Network ({notificationNotificationCount})</button>
      <button>Me</button>
      {/* <button onClick={() => {
        setMessageNotificationCount(messageNotificationCount + 1)
      }}>Add Messages</button> */}
      <button onClick={() => {
        setMessageNotificationCount(c => c + 1)
      }}>Add Message</button>
    </div>
  )
}

export default App
      