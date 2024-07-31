import { useState } from "react"
import { jsx } from "react/jsx-runtime";


export const useLocalStorage = (key, initValue) => {

    const [storedValue, setStoredValue] = useState(()=>{
        try{

            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initValue

        }catch(err){
            console.err("Error Fetching value "+err)
        }
        return initValue;
    });
    
    const setStorageValue = (value) => {
        console.log("storing val "+value)
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        }catch(err){
            console.log("Unable to store item "+err)
        }
    }

    const removeStorageValue = () => {

        try{
            setStorageValue(null)
            localStorage.removeItem(key)
        }catch(err){
            console.log("Unable to remove item "+err)
        }

    }

    return [storedValue, setStorageValue, removeStorageValue]

}
