import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';
import { upload } from '@testing-library/user-event/dist/upload';

const Write = () => {
  const {email} = useAuth();
  const [board, setBoard] = useState({title:'', content:'', writer:'', attachDtos:[]});

  const navigate = useNavigate();
  const {req} = useAxios();
  const [uploaded, setUploaded] = useState([]);

    useEffect(()=>{
    (async()=> {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);

    })();
  }, [req, num]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(board);

    req('put', `notes/{num}`, {...board, attachDtos : uploaded});

  alert('글수정 성공');
  navigate("/notes");


}
const handleFileUpload = async e => {
  const files = e.target.files;
  if(!files) return;
  console.log(files);

  for(let i = 0 ; i < files.length ; i++) {
    setAttachArr(...AttachArr, files[i])
  }

    try {
      const result = await req('post', 'file/upload', formData, {'Content-Type':'multipart/form-data'});
      console.log(result);
      setUploaded([...uploaded, ...result]);


    }
      catch(error) {
        console.error("Error during upload:", error);
      }

      e.target.value = '';
  }

  // const inputFile -;

  return (
    <div>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>
        <input name='title' value={board.title} onChange={handleChange} />
        <input name='content' value={board.content} onChange={handleChange} />
        <input name='memberEmail' value={board.writer} onChange={handleChange} readOnly/>
        <div>
          <h3>attachs : {board.attachDtos.length}</h3>
          <ul>
            {board.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
          </ul>
        </div>
        <button data-uuid={u.uuid} onClick={e => setUploaded( uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid))}>글수정</button>
      </form>
    </div>
  );
}

export default Modify;