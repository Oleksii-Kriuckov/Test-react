import React from 'react';
import photo from './foto.jpg';
import Header from './Components/header/header';
import Main from './Components/main/main';
import Footer from './Components/footer/footer';

const Photostyles = {
  width: '100%'
}

function App() {
  const items = [
    {ind: 1, title: "Home"}, 
    {ind: 2, title: "photoapp"}, 
    {ind: 3, title: "design"}, 
    {ind: 4, title: "download"}
  ]

  return (
    <div className="wrapper">
      <Header items ={items}/>
      <img src={photo} style={Photostyles} className="Background" alt="background"/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
