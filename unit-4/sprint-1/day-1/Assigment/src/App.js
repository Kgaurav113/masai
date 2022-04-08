import React from 'react';
import './App-module.css'
import List from './components/List';
import List1 from './components/List1';
import Join from "./components/Join";
import Setting from './components/Settings';
import Login from './components/Login';
import Contact from './components/Contact';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';
import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <>
    
    <div className="App">
     <List/>

     <List1/>
    </div>
    <div style={{display:"flex"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
             <Join/>
              <Login/>
             <Search/>
              <Home/>
      </div>
     <div style={{display:"flex",flexDirection:"column",gap:"10px",marginLeft:"10px"}}>
       <Setting/>
     
     <Contact/>
     
     <Help/>
     
     <Download/>
</div>
      
    </div>
    </>
    

  );
}

export default App;
