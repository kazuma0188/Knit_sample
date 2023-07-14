
import {Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Login from './components/Login';
import Logout from './components/Logout';
//import React, { useState } from 'react';

function Logout2(){
  
  //遷移のところに、 onClick={Logout2}
    //Login.setIsLoggedIn(false);
    //Login.setUsername('');
    //Login.setPassword('');
    setTimeout(() => {
      window.location.href = "/";
    }, 2 * 1000);
}

function App() {
 
  return (

<BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Homemain />} />
          <Route path="/about" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        
      
      </div>

    </BrowserRouter>
  );
}


function Homemain() {
  return (
    <div>
    <h2>Homemain Content</h2>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Page1">Page1</Link>
        </li>
        <li>
          <Link to="/Page2">Page2</Link>
        </li>
    
        <li>
          <Link to="/Logout" onClick={Logout2}>Logout</Link>
        </li>
       <br/>
    </div>
    )
}

function About() {
  return (
  <div>
      <h2>About Content</h2>
  <Link to="/main">Homemain</Link>
  </div>

  );
}

function NotFound() {
  return <h2>このページは存在しません</h2>;
}

export default App;

//ここからコメントアウト
/*
import Page3 from './components/Page3';
<Route path="/Page3" element={<Page3 />} />
         

// ./src/components/App.js
/*
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
//import PageNotFound from './components/PageNotFound'
//import PageThread from './components/PageThread'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/Home" >
          <Home />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App; // コンポーネントをエクスポート




export default App
/*import './App.css';

 <Route exact path={'/threads/:threadId'}>
          <PageThread />
        </Route>
        <Route path={'*'}>
          <PageNotFound />
        </Route>



function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      
    </div>
  );
}

export default App;


//ロゴを出すコード

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App; // コンポーネントをエクスポート
*/
