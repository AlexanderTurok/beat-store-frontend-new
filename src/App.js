
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./component/header/Header";
import About from './page/About';
import Beats from './page/Beats';
import Checkout from './page/Checkout';
import Contact from './page/Contact';
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/beats' element={<Beats />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
