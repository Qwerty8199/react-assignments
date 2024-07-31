import { useLocalStorage } from "./hooks/useLocalStorage"

export const ProfileComponent = () => {

    const [name, setName, removeName] = useLocalStorage("username",'')

    const handleChange = (e) =>{
        console.log("calling")
        e.preventDefault()
        setName(e.target.value)
    }

    return(
        <div>
            <h1> Profile </h1>
            <input type="text" value={name} onChange={handleChange} placeholder="EnterName"/>
            <p>
                Stored Name - {name}
            </p>
            <button onClick={removeName}>
                DELETE
            </button>
        </div>
    )
}