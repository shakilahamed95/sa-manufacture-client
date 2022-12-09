import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://sa-manufacture-server-4jap.onrender.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]
}
export default useTools;