import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import styles from './App.module.css';
import { HomePage } from './pages';
import { Navbar } from './components';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className={styles.App}>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            {/* <Route path="/products" element={<Products />} />
=======
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
>>>>>>> c4e0f464eba9c63a004d579a1211ecd7b0524578
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getaccess" element={<Getaccess />} /> */}
<<<<<<< HEAD
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
=======
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
>>>>>>> c4e0f464eba9c63a004d579a1211ecd7b0524578
  );
}

export default App;