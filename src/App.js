import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";
// import { Display } from './redux-prac/display/Display';
import Button from "./Button/Button";
import { Toggle } from "./Button/Toggle";
import Serach from "./Searchfilter/Serach";
import BookData from "./Searchfilter/db.json";
import { Todo } from "./Todo/pages/Todo";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Scooty/Home";
import {Display} from "./Scooty/Display"
import { Puppy } from "./puppy love/Puppy";
import { Puppyname } from "./puppy love/Puppyname";
import { Pagination } from "./Pagination/Pagination";
import { Landing } from "./Cryptocurrency_Pagi/Landing";
import { Infinte } from "./Infinte scroll/Infinte";
import { UseMemo } from "./Button/UseMemo";
import { StudentDetails } from "./table/StudentDetails";
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
// import { LimitedData } from "./Customhook/LimitedData";

const LimitedData = lazy(()=> import('./Customhook/LimitedData'));

function App() {
  let clientId = '507262472563-jnmcgpmn8jpmlor1d8q68vutuptm87lm.apps.googleusercontent.com'
  return (
    <div className="App">
      <Suspense fallback={<h1>...loading</h1>}>
      {/* <StudentDetails/> */}
      {/* <Display/> */}
      {/* <Button/> */}
      {/* <Toggle/> */}
      {/* <UseMemo/> */}
      {/* <Usebtn/> */}
      {/* <Useref/> */}
      {/* <Serach placeholder="Enter a Book Name..." data={BookData}/> */}
      {/* <Infinte/> */}
      {/* <Todo/> */}
      {/* <Home/> */}
     {/* <Pagination/> */}
     {/* <Landing/> */}
      {/* <Routes>
        <Route path="/" element={<Puppy/>} />
        <Route path="/puppy/:name" element={<Puppyname/>} />
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dis/:id" element={<Display />} />
      </Routes> */}
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
        <Context>
        <Routes>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        </Context>
        {/* <Product/>
        <CartPage/> */}
        </Suspense>
    </div>
  );
}

export default App;
