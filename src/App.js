import React from 'react';
import data from "./data";
import Card from "./components/Card"
import Header from './components/Header';

function App() {
  const cards = data.map(item => {
    return(
      <Card 
        {...item}
      />
    )
  })
  return (
    <div className='app--container'>
      <Header />
      <section className='cards--list'>
        {cards} 
      </section>
    </div>
  );
}

export default App;
