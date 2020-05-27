import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import Headline from './components/headline/Headline';

const tempArr = [{
  fName: 'Ninfa',
  lName: 'Blogs',
  email: 'ninfa_sys@hotmail.com',
  age:32,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
