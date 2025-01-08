import { useCallback ,useState } from "react";
import axios from "axios";

 const BASE_URL = 'https://jsonplaceholder.typicode.com';

const useAxios = (baseUrl = BASE_URL) =>{
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true); 
  const [error,setError]=useState(null); 

  const req = useCallback(
    async (method,endpoint,body = null,addHeaders = {}) => {
      setLoading(true)
        try{
          const resp = await axios({
            method,
            url:`${baseUrl}${endpoint}`,
            data:body,
            headers:{
              'Content-Type':'application.json',
              ...addHeaders
            }
          });
          setData(resp.data);
        } catch (err){
          setError(err);
        } finally{
          setLoading(false);
        }    
      }
      , [baseUrl]);

    return(data,loading,error,req);
    
}
export default useAxios;
