import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import Header from './components/Header/Header';
import CommonPage from './components/CommonPage/CommonPage';

function App() {
  return (
    <div className="bg-dept-grey">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/work" element={<WorkPage/>}/>
          <Route path="/culture" element={<CommonPage/>}/>
          <Route path="/service" element={<CommonPage/>}/>
          <Route path="/insights" element={<CommonPage/>}/>
          <Route path="/contact" element={<CommonPage/>}/>
          <Route path="/careers" element={<CommonPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
