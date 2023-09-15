import React, { useContext } from 'react'
import { BrowserRouter as Router ,
   Routes,
    Route,
    } from "react-router-dom";
import Home from './pages/home/Home';
//  import Details from './pages/details/Details'
import Header from './components/header/Header';
import { Login } from './pages/login/Login';
import { Account } from './pages/account/Account';
import { Register } from './pages/login/Register';
import { Create } from './components/create/Create';
import { Footer } from './components/footer/Footer';
 import { Context } from "./context/Context";
import { DetailsPages } from './pages/details/DetailsPages';
const App = () => {
   const { user } = useContext(Context);
   console.log(user);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/register" Component={Register}></Route>
          <Route exact path="/post/:id" Component={DetailsPages}></Route>
          <Route exact path="/account" Component={Account}></Route>
          <Route exact path="/create" Component={Create}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App