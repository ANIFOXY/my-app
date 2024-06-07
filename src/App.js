import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Jogos from './pages/Theme';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<About />} />
        <Route path="Jogos/*" element={<Jogos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
