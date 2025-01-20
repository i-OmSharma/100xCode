
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/atom/Atom'
import { useMemo } from 'react'

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
 //we want that get the total notifcation count on the me , and re calculate them or re-render them when it is needed.
  // const finalCount = networkNotificationCount + jobNotificationCount + notificationNotificationCount + messageNotificationCount

  // const finalCount = useMemo(() => {
  //   return networkNotificationCount + jobNotificationCount + notificationNotificationCount + messageNotificationCount
  // }, [networkNotificationCount, jobNotificationCount, notificationNotificationCount, messageNotificationCount])
    
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messages ({messageNotificationCount})</button>
      <button>Network ({notificationNotificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
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
      