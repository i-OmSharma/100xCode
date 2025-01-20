import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104 
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationkAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

//Selector is something which can be derived from other atoms and other selectors

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) => {
        const networkNotificationCount = get(networkAtom)
        const jobNotificationCount = get(jobsAtom)
        const notificationNotificationCount = get(notificationAtom)
        const messageNotificationCount = get(messagingAtom)
        return networkNotificationCount + jobNotificationCount + notificationNotificationCount + messageNotificationCount
    }
})
      
