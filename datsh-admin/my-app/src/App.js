import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import OrderList from "./pages/orderList/OrderList";
import ViewOrder from "./pages/viewOrder/ViewOrder"
import ViewMessage from "./pages/viewMessage/ViewMessage"

import CategorieList from "./pages/CategoriesList/CategorieList";
import Categorie from "./pages/Categorie/Categorie";
import Newcategorie from "./pages/Newcategorie/Newcategorie";
import ContactList from "./pages/ContactListe/ContactList";
import NewsletterList from"./pages/NewsletterListe/NewsletterList";
import {useState} from "react";
import { userRequest } from './requestMethods'
import NewUser from "./pages/newUser/NewUser";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRstock, setIsRstock] = useState(false);
  const [isRcomm, setIsRcomm] = useState(false);
 
  userRequest.post('/auth/me').then(res  => {
    const data = res.data
    setIsAdmin(data.isAdmin)
    setIsRstock(data.isRstock)
    setIsRcomm(data.isRcomm)
  }).catch(err => {
    
    console.log(err)
  });
 
  
  return (
    <Router>
      <Switch>
        
        <Route path="/login">
          <Login />
        </Route>
       
        {isAdmin  ? (<><Topbar />
      <div className="container">
        <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
            {isRstock || isAdmin ? (<>
            <Route path="/ProductList">
            <ProductList />
          </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
              <Route path="/CategorieList">
                <CategorieList />
              </Route>
              <Route path="/Categorie">
                <Categorie />
              </Route>
              <Route path="/Newcategorie">
                <Newcategorie />
              </Route>
            </>) : null}

            {isRcomm || isAdmin ? (<>
              <Route path="/OrderList">
                <OrderList />
              </Route>
              <Route path="/ViewOrder">
                <ViewOrder />
              </Route>
            </>) : null}
            <Route path="/ContactList">
              <ContactList />
            </Route>
            <Route path="/NewsletterList">
              <NewsletterList/>
            </Route>
            <Route path="/ViewMessage">
              <ViewMessage />
            </Route>
           
            <Route path="/newUser">
              <NewUser />
            </Route>
          </div> </>): <Login />}

      </Switch>
    </Router>
  );
}

export default App;
