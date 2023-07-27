import logo from "./logo.svg";
import "./App.css";
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

function App() {
  let clientId = '507262472563-jnmcgpmn8jpmlor1d8q68vutuptm87lm.apps.googleusercontent.com'
  return (
    <div className="App">
      {/* <StudentDetails/> */}
      {/* <Display/> */}
      {/* <Button/> */}
      {/* <Toggle/> */}
      <UseMemo/>
      {/* <Usebtn/> */}
      {/* <Useref/>/ */}
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
    </div>
  );
}

export default App;
