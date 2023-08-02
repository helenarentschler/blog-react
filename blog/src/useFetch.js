import { useState, useEffect } from 'react';

//use - palavra reservada para custom hook
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {

        const abortCtrl = new AbortController();

        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error("could not fetch the data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }) 
            .catch(err => {

                if(err.name === 'AbortError') {
                    console.log("fetch aborted");
                } else {
                    setError(err.message);
                    setIsLoading(false);
                }
            });

        return () => abortCtrl.abort();

    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;