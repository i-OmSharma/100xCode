
import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        } 
    })
});
// flash or the default hardcoded value for the loader has been solved via asynchronous data query.

//default value of an atom should be synchronous 
// it can be a selector which can be asynchronous

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})