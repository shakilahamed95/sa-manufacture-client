import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sa-manufacture-server-4jap.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews]
}
export default useReview;