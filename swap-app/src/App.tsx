import React from 'react';
import './App.css';
import Header from './component/Header';
import MainLayout from './component/MainLayout';

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}
function App() {
  return (
    <div className={style.wrapper}>
    <Header />
    <MainLayout />
  </div>  );
}

export default App;
