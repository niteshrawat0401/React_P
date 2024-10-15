import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import Button from "./Button/Button";
import { Toggle } from "./Button/Toggle";
import Serach from "./Searchfilter/Serach";
import BookData from "./Searchfilter/db.json";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Scooty/Home";
import { Puppyname } from "./puppy love/Puppyname";
import { Pagination } from "./Pagination/Pagination";
import { Landing } from "./Cryptocurrency_Pagi/Landing";
import { Infinte } from "./Infinte scroll/Infinte";
import { UseMemo } from "./Button/UseMemo";
import { Usebtn } from "./Button/Usebtn";
import Useref from "./Button/Useref";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Signin} from './googleauth/Signin'
import AccountProvider from './googleauth/AccountProvider'
import { Main } from "./googleauth/Main";
import Star from "./Button/Star";
import { Mycustom_compo } from "./Customhook/Mycustom_compo";
import SortAlpha from "./Button/SortAlpha";
import Paginate from "./Miniproject/Pagination/Paginate";
import Product from "./Miniproject/ShoppingCart/Product";
import { Context } from "./Miniproject/ShoppingCart/ContextFile";
import CartPage from "./Miniproject/ShoppingCart/CartPage";
import Time from "./Miniproject/StopWatch/Time";
// import { LimitedData } from "./Customhook/LimitedData";

const LimitedData = lazy(()=> import('./Customhook/LimitedData'));

function App() {
  let clientId = '507262472563-jnmcgpmn8jpmlor1d8q68vutuptm87lm.apps.googleusercontent.com'
  return (
    <div className="App">
      <Suspense fallback={<h1>...loading</h1>}>
      {/* <Button/> */}
      {/* <Toggle/> */}
      {/* <UseMemo/> */}
      {/* <Usebtn/> */}
      {/* <Useref/> */}
      {/* <Serach placeholder="Enter a Book Name..." data={BookData}/> */}
      {/* <Infinte/> */}
      {/* <Home/> */}
     {/* <Pagination/> */}
     {/* <Landing/> */}
      {/* <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
        <Main/>
        </AccountProvider>
      </GoogleOAuthProvider> */}

      {/* <Star/> */}
      {/* <SortAlpha/> */}
        {/* <Mycustom_compo/> */}
        {/* <LimitedData/> */}


        {/* <Paginate/> */}
        <Time/>
        {/* <Context>
        <Routes>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        </Context> */}
        </Suspense>
    </div>
  );
}

export default App;
