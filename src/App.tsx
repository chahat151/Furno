
import './css/bootstrap.min.css'
import './css/tiny-slider.css'
import './css/style.css'
// import './css/font-awesome.min.css'
import "@fortawesome/fontawesome-free/css/all.css";

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Thankyou from './pages/Thankyou';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Blog/> */}
      {/* <Cart/> */}
      <Checkout/>
      {/* <Services/> */}
      {/* <Shop/> */}
      {/* <Thankyou/> */}
    </Router>
  );
}

export default App
