import './App.css';
import Analyzer from './components/Analyzer/Analyzer';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-3xl pt-3 font-bold font-serif'>E-BOOK ANALYZR</h1>
      <Analyzer></Analyzer>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </div>
  );
}

export default App;
