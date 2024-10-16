import Header from './components/Header';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeMode(){
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
    console.log(document.body.classList)
  }
  return (
    <div className="App dark:bg-black h-lvh overflow-hidden font-Quicksand">
      <Header />
      <Content />
      <button onClick={changeMode} className='bg-black dark:bg-orange-400 dark:text-white p-2 hover:bg-slate-600 text-orange-500 w-16 rounded-md absolute bottom-4 right-8 md:bottom-12 md:right-24'>Dark</button>
    </div>
  );
}

export default App;
