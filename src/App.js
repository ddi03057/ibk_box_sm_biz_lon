import logo from './logo.svg';
import './App.css';
import LonDetail from './pages/LonDetail.js'

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Link onClick={()=>{

      }} to="/">홈</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/londetail">상품상세</Link> ▷	▶

      <Link onClick={()=>{

      }} to="/cstinfoAdd">고객정보등록</Link> ▷	▶
      
      <Link onClick={()=>{

      }} to="/">사전안내</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/">심사준비 1단계</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/">심사준비 2단계</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/">심사준비 3단계</Link> ▷	▶
      
      <Link onClick={()=>{

      }} to="/"></Link>
      <Routes>
        <Route path="/londetail" element={ <LonDetail/> } />
        <Route path="/about" element={ <div></div> } />
      </Routes>
    </div>
  );
}

export default App;
