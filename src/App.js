import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getaccess" element={<Getaccess />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;