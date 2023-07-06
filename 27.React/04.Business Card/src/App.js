import Footer from './components/Footer';
import Interests from './components/Interests';
import About from './components/About';
import Detail from './components/Detail';
import './styles.css';

function App() {
  return (
    <main className='content'>
      <Detail />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}

export default App;