import { useCallback ,useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

 const BASE_URL = 'https://localhost:8080.api.v1/';

const useAxios = (baseUrl = BASE_URL) =>{
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true); 
  const [error,setError]=useState(null); 
  const {token} = useAuth;

  // const token = "";

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
              'Authorization': `Bearer ${token}`,
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
      , [baseUrl, token]); //의존성 배열

    return{data,loading,error,req};
    
}
export default useAxios;
