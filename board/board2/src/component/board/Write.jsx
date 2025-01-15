import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const Write = () =>{
  // const {title,setTitle} = useState('');
  // const {content,setContent} = useState('');
  // const {memberEmail,setMemberEmail} = useState('');
  const [board, setBoard]=useState({title:'',Write:'',memberEmail:''});
  // const [data,setData]=useState(null);
  // const [loading,setLoading]=useState(true); 
  // const [error,setError]=useState(null); 


  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("file");

    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const token = localStorage.getItem('token');

      const headers = {
        'Authorization': `Bearer ${token}`,
      }

      const response = await fetch("http://localhost8080:/api/v1/files/upload", {
        method: "POST",
        body: formData,
        headers
      });
  
      const result = await response.json();
      if (result.status === "success") {
        console.log("File uploaded successfully:", result.data);
      } else {
        console.error("Upload failed:", result.message);
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };

  const navigate = useNavigate();
  const {req}=useAxios();

  const handleChenge = e => {
    const {name,value} = e.target;
    setBoard({...board , [name]:value})
  }

 
      const handleSubmit= e => {
        e.preventDefault();
        console.log(board);
        
        req('post','board',board);

        alert('글쓰기 성공');
        navigate("/");
      }
      return(
        <div>
          <h1>write</h1>
          <form onSubit={handleSubmit}>   
            <input name = 'title' value={board.title} onChange={handleChenge}/>
            <input name = 'content' value={board.content} onChange={handleChenge} />
            <input name = 'memberEmail' value={board.memberEmail} onChange={handleChenge} />
            <input type='file' onChange={handleFileUpload}></input>
            <button>글쓰기</button>
          </form>
        </div>
      );
}
export default Write;