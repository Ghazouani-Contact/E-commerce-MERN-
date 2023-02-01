import Product from "./pages/Product";
import Home from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from "./pages/ProductList";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success"; 
import { useSelector } from "react-redux";
import Commande from "./pages/Commande";
//import Modepay from "./pages/modepay/ModePay";
import Contact from "./pages/contact/Contact";
//import Pay from "./pages/Pay";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
 
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product  />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
       {/* <Route path="/pay">
          <Pay/>
          </Route>*/}
       <Route path="/success">
          <Success />
        </Route> 
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/Commande">
          <Commande />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Router>
   
  );
};

export default App;