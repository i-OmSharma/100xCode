import { useState } from "react";
// import { Header } from "./Header";
import HeaderMemo from "./HeaderMemo";

export const ChangeTitle = () => {
    const[title, setTitle] = useState("Om1");

    function onClickChange() {
        const newTitle = `New title ${Math.random() * 100}`
        setTitle(newTitle);
    }

    return (
        <>
            <button onClick={onClickChange}>Click to Change title</button>
            <HeaderMemo title={title} /> 
            {/* <HeaderMemo title="Om2" />
            <HeaderMemo title="Om3" />
            <HeaderMemo title="Om4" />
            <HeaderMemo title="Om5" /> */}
        </>
    )
}