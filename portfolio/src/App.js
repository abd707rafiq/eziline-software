import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomaPage from './page/HomaPage';
import ProductDetail from './page/ProductDetail';
import ContactPage from './page/ContactPage';

function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomaPage />} />
          <Route path="/project-detail/:projectId" element={<ProductDetail />} />
          <Route path="/contact"  element={<ContactPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
