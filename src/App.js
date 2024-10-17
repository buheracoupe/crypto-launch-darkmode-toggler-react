import Header from './components/Header';
import Content from './components/Content';
import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';


function App() {
    
  return (
    <div className="App relative dark:bg-black m-0 mt-[-1rem] p-4 min-h-screen font-Quicksand">
      <Header />
      <Content />
      <DarkModeToggle />
    </div>
  );
}

export default App;
