import { memo } from "react";

export const HeaderMemo = memo(({title}) => {
    return ( <div>
            {title}
        </div>
    )
})

HeaderMemo.displayName = "HeaderMemo";

export default HeaderMemo;