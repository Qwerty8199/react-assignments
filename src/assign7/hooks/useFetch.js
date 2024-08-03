import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const fetchData = async()=>{
            try{

                const resp = await axios.get(url)
                console.log(resp.data)
                const pokeData = resp.data.results
                setData(pokeData)
            }catch(err){
                setError(err)
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        fetchData()

    }, [url])

    return {data, loading, error}
}