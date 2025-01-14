import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard = () => {
  const {email,token,logout} = useAuth();

  // const {email, setEmail} = useState(localStorage.getItem('email'));
  // const {token, setToken} = useState(localStorage.getItem('token'));

  // setEmail(localStorage.getItem("email"));
  // setToken(localStorage.getItem(token));


  // const handleLogout = () => {
  //   //storage에 쓸수 있는건 setItem, getItem, removeItem밖에 없음
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("token");
  //   setEmail('');
  //   setToken('');
  // }

  return (
    <div>
      <h1>시작페이지</h1>
      <p>{email || 'guest'}</p>
      <p>{token}</p>
      {email ? <><button onClick={logout}>로그아웃</button><Link to={'/list'} >게시글</Link></> : <Link to={'/'}> 로그인 </Link>}
    </div>
  );
}

export default Dashboard;