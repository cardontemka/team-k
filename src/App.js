import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Review } from './components';
import { Cord } from './components';
import { HomePage } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/review' element={<Review />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getaccess" element={<Getaccess />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;