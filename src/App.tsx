import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import Header from './components/Header';
import CommonPage from './components/CommonPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/work" element={<WorkPage/>}/>
        <Route path="/culture" element={<CommonPage/>}/>
        <Route path="/service" element={<CommonPage/>}/>
        <Route path="/insights" element={<CommonPage/>}/>
        <Route path="/contact" element={<CommonPage/>}/>
        <Route path="/careers" element={<CommonPage/>}/>
      </Routes>
    </>
  );
}

export default App;
