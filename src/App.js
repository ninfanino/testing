import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import Headline from './components/headline/Headline';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!"/>
      </section>
    </div>
  );
}

export default App;
