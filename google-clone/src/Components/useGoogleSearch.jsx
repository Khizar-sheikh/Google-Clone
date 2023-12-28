import { useEffect, useState } from "react"
import { API_KEY } from './key';

const CONTEXT_KEY = "6104e6b2d7e554e05"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, [term]);

    return data; // Return the fetched data if needed in the component
}

export default useGoogleSearch;
