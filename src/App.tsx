import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import WorkPage from './pages/WorkPage';
import Header from './components/Header/Header';
import CommonPage from './pages/CommonPage';
import { importAllImages } from './hooks/importAllImages';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

const images = importAllImages(require.context('./assets/pages', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div className="bg-dept-grey flex flex-col h-screen">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<CommonPage heroText={<h1>Home Page</h1>} heroImage={images['work-page.png']}/>}/>
          <Route path="/work" element={<WorkPage heroImage={images['work-page.png']}/>}/>
          <Route path="/culture" element={<CommonPage heroText={<h1>Culture</h1>} heroImage={images['work-page.png']}/>}/>
          <Route path="/service" element={<CommonPage heroText={<h2>Service</h2>} heroImage={images['work-page.png']}/>}/>
          <Route path="/insights" element={<CommonPage heroText={<h2>Insights</h2>} heroImage={images['work-page.png']}/>}/>
          <Route path="/contact" element={<CommonPage heroText={<h2>Contact</h2>} heroImage={images['work-page.png']}/>}/>
          <Route path="/careers" element={<CommonPage heroText={<h2>Careers</h2>} heroImage={images['work-page.png']}/>}/>
        </Routes>
      </main>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
