import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import LikesScroll from './components/LikesScroll';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: 'rgba(8, 22, 34, 0.555)'}}>
        <div className="paddingcontainer">
     <Header/>
     <div className='body-text'>
     <h1>Cari Cari</h1>
     <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
     </div>
     <LikesScroll/>
     <Cards/>
     <Reviews/>
    </div>
    </div>
    </div>
  );
}

export default App;
