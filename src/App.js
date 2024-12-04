import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import WindowTracker from './components/windowTracker';
import React from 'react';

function App() {
  // const [show, setShow] = React.useState(true)

  // function toggle() {
  //   setShow(res => !res)
  // }

  return (
    <>
      <Header />
      <Meme />
    </>

    // <div className="container">
    //   <button onClick={toggle}>
    //     Toggle WindowTracker
    //   </button>
    //   {show && <WindowTracker />}
    // </div>
  );
}

export default App;
