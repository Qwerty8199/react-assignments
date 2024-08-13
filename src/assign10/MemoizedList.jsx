import React from "react"


export const MemoizedListItem = React.memo(( {listData} ) => {
    console.log(`rendering item -${listData}`)
    return(
        <div>
            {listData}
        </div>
    )
})