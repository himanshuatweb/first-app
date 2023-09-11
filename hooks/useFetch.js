import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint,query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'Add41fca77de9mshf82454c4755a66bp1299e8jsn0de44ea9ebb0',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query}
      };

      const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const res = await axios.request(options);
            setData(res.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert('Error in API call');
        }finally{
            setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      },[]);

      const refetch = ()=>{
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}
}

export default useFetch;