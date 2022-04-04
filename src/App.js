import { Route, Routes } from 'react-router-dom';
import './App.css';
import Analyzer from './components/Analyzer/Analyzer';
import Blogs from './components/Blogs/Blogs';
import Charts from './components/Charts/Charts';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-3xl pt-3 font-bold font-serif'>E-BOOK ANALYZR</h1>
      <Routes>
        <Route path='/' element={<Analyzer></Analyzer> }></Route>
        <Route path='/reviews' element={<CustomerReview></CustomerReview>}></Route>
        <Route path='/dashboard' element={<Charts></Charts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </div>
  );
}

export default App;
