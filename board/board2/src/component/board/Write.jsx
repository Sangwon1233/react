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
            <button>글쓰기</button>
          </form>
        </div>
      );
}
export default Write;