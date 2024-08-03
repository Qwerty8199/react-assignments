import { useFetch } from "./hooks/useFetch"


export const Assign7Page = () =>{

    const URL = "https://pokeapi.co/api/v2/pokemon"
    const {data, loading, error} = useFetch(URL) 

    if(loading) return <div> loading ...</div>
    if(error) return <div> Error : {error.message} </div>

    return(
        <div>
            {console.log(data)}
            Data Fetched - 
            {
                data.map((data)=>{
                    return(
                        <h2>
                            {data.name}
                        </h2>
                    )
                })
            }
        </div>
    )
}