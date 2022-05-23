import { useEffect, useState } from "react"

const useNotAdmin = user => {
    const [notAdmin, setNotAdmin] = useState(false)
    const [notadminLoading, setNotAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/notadmin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setNotAdmin(data.notadmin);
                    setNotAdminLoading(false);
                })
        }
    }, [user])
    return [notAdmin, notadminLoading]
}
export default useNotAdmin;