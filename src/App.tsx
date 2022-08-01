import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import Header from './components/Header/Header';
import CommonPage from './components/CommonPage/CommonPage';

function App() {
  return (
    <>
      <Header/>
      <main className="bg-dept-grey h-screen">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/work" element={<WorkPage/>}/>
          <Route path="/culture" element={<CommonPage pageName='Culture'/>}/>
          <Route path="/service" element={<CommonPage pageName='Service'/>}/>
          <Route path="/insights" element={<CommonPage pageName='Insights'/>}/>
          <Route path="/contact" element={<CommonPage pageName='Contact'/>}/>
          <Route path="/careers" element={<CommonPage pageName='Careers'/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
