import { Route, Routes } from 'react-router-dom';
import './App.css';
import Analyzer from './components/Analyzer/Analyzer';
import Blogs from './components/Blogs/Blogs';
import Charts from './components/Charts/Charts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageUnavilable from './components/PageUnavilable/PageUnavilable';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-3xl pt-3 font-bold font-serif'>Get Your Favourite Book</h1>
      <Routes>
        <Route path='/' element={<Analyzer></Analyzer> }></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Charts></Charts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<PageUnavilable></PageUnavilable>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
