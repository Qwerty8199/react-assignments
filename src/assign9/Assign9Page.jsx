import { useEffect } from "react"
import { useState } from "react"
import {ComponentWithSpinner} from './CustomHOC'

export const Assign9Page = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(()=>{

        setTimeout(()=>{
            setData("Data....")
            setIsLoading(false)
        },2000)
    },[]);

    return( 
        <div className="p-4">
            <ComponentWithSpinner isLoading={isLoading} data={data} />
        </div>
    )

}