import { atom, selector } from "recoil";

export const countAtom = atom({
    //here u can give 2 argument inside an obj 
    //atom expects 1 argument as an input which is an obj 
    //it reqire bunch of keys 
    key: "countAtom", //key signify how uniquely u identify a atom
    default: 0
})

//here i have seperatley defined my state

export const evenSelector = selector({
    key: "evenSeletor",
    get: ({get}) => {
        const count = get(countAtom)
        return count % 2
    }
})

//Selector can depend on other atoms,
//Selector can depend on other selector