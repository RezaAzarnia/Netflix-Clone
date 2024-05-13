import { useEffect, useState } from "react"


const useFetch = (fetchFunction, fetchDependeny) => {
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        setIsLoading(true)
        const fetchQUery = async () => {
            try {
                const response = await fetchFunction()
                response && setIsLoading(false)
                setQuery(response)
            } catch (error) {
                setError(error)
            }
        }
        fetchQUery()
    }, [fetchDependeny])

    return { isLoading, query , error}
}

export default useFetch