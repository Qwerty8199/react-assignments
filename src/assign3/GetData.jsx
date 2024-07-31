import { useEffect, useState } from "react"
import axios from "axios"


export const GetData3 = () => {

    const AnimeFormatData = {
        url: "",
        title: "",
        episodes: 0,
        rank: 0,
        image:""
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
                resp = await resp.data
                const result = resp.data
                // let data = AnimeFormatData.copy()
                console.log(result.images.jpg.image_url)

                const data = {
                    url: result.url || "",
                    title: result.title || "",
                    episodes: result.episodes || 0,
                    rank: result.rank || 0,
                    image: result.images?.jpg?.image_url || ""
                  };
          
                
                setAnimeData(data)
                console.log(data.image)
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
        <>
           <AnimeTile data={animeData} />
        </>
    )
}

const AnimeTile = ({data}) => {
    return(
        <div className="flex items-center ">
            <img src={data.image} alt="" ></img>
            <div className="flex flex-col ml-2 p-1">
            <h2 className="text-2xl">Title : {data.title}</h2>
                Rank : {data.rank}
            </div> 
        </div> 
    )
}