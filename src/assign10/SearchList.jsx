import { useMemo, useState } from "react"
import { MemoizedListItem } from "./MemoizedList"


export const SearchList = ({listData}) =>{

    const [searchItem, setSearchItem] = useState("")

    const filteredList = useMemo(()=>{
        console.log("Filtering data..")
        return listData.filter( item => item.toLowerCase().includes(searchItem.toLowerCase()))

    },[listData, searchItem])

    const handleChange = (e) =>{
        e.preventDefault()
        setSearchItem(e.target.value)
    }

    return(
        <div>
            <input 
                type="text"
                value={searchItem}
                onChange={handleChange}
                placeholder="Search..."
            />
        
        <div>
            <ul>
                {
                    filteredList.map((item)=>{
                        return(
                            <li>
                                <MemoizedListItem key={item} listData={item} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </div>

    )


}