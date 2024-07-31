import { useEffect, useState } from "react"
import axios from "axios"


export const GetData = () => {

    const AnimeFormatData = {
        url: "",
        title: "",
        episodes: 0,
        rank: 0.
    }

    const [animeData, setAnimeData] = useState(AnimeFormatData)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL = "https://api.jikan.moe/v4/random/anime"

    useEffect(()=>{

        const fetchData = async () =>{
            console.log("fetching Data")
            try{
                let resp = await axios.get(URL);
                // console.log(resp)
                // console.log("resp",resp)
                resp = await resp.data
                // console.log("resp",resp)
                // console.log(resp.data)
                const result = resp.data

                const data = {
                    url: result.url,
                    title: result.title,
                    episodes: result.episodes,
                    rank: result.rank,
                  };
          

                setAnimeData(data)
                // console.log("data",animeData)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }  

    fetchData();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return(
        <div>
            Title : {animeData.title} - 
            Rank : {animeData.rank}
        </div>  
    )
}