import React from 'react'
import './App.css';
import Photo from './component/profile/Profilephoto.js'
import Adresss from './component/profile/Adress'
import Fulln from './component/profile/FullName'
function App() {
  return (
    <div className="App" >
     <Photo />
     <Fulln a="eya"/>
     <Adresss b="rades"/>
     
    </div>
 
  );
}

export default App;
