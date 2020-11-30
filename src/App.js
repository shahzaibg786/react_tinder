import React from 'react'
import './App.css';
import Header from './components/Header'
import Tindercards from './components/Tindercards'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    <div className="app">
      <Header />
      <Tindercards />
      <SwipeButtons />
    </div>
  );
}

export default App;
