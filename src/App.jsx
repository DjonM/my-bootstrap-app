import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Favorite from './components/Favorite';
import Price from './components/Price';
import Discription from './components/Discription';
import Form from './components/Form';

function App() {
  return (

    //Обращение к компонентам.
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/'
            element={
              <Cards />
            } />

          <Route path='/favorite'
            element={
              <Favorite />
            } />

          <Route path='/price'
            element={
              <Price />
            } />

          <Route path='/discription'
            element={
              <Discription />
            } />

          <Route path='/form'
            element={
              <Form />
            } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
