import { BrowserRouter,Route,Routes } from 'react-router-dom';

import List from './component/board/List';
import Write from './component/board/Write';
import Dashboard from './component/common/Dashboard';
import ProtectedRoute from './component/common/ProtectedRoute';
import LoginForm from './component/member/LoginForm';
// import NotFound from './component/common/NotFound';
import './App.css';
import {AuthProvider} from "./hooks/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/list" element={
          <ProtectedRoute>
            <List/>
            </ProtectedRoute>
        }/>

        <Route path="/write" element={
            <ProtectedRoute>
            <Write/>
            </ProtectedRoute>
        }/>       
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<LoginForm/>}/>
        {/* <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
