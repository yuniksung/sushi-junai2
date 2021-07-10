import './App.scss';
import DefaultPage from './component/DefaultPage/DefaultPage';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DefaultPage />
      <Footer />
    </div>
  );
}

export default App;
