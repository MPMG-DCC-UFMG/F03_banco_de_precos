import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../services/apiRequest"

export default function useFetch(endpoint: string, params?: string, method: 'GET' | 'POST' = 'GET') {

    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    let response;
                    if (method === 'GET') {
                        const url = `${baseUrl}${endpoint}${params || ""}`;
                        response = await axios.get(url)
                    } else {
                        const url = `${baseUrl}${endpoint}`;
                        response = await axios.request({
                            url,
                            method: "POST",
                            data: JSON.parse(params || ""),
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            }
                        })
                    }
                    setData(response.data)
                } catch (err) {
                    console.log(err);
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [endpoint, params])

    return { data, error, loading }

}