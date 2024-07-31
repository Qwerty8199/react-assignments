import { useState } from "react"


export const Counter = () =>{

    let [count, setCount] = useState(0)

    return(
        <div className="flex m-2 p-1">
            <button className="p-5  bg-red-300" onClick={() => setCount(count-1)}> - </button>
            <div className="p-4 m-4 ">
                {count}
            </div>
            <button className="p-5  bg-red-300" onClick={() => setCount(count+1)}> + </button>
        </div>
    )
}