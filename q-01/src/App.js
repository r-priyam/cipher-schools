import { useState } from 'react';

function App() {
  const [buttonText, setButtonText] = useState('Click me to login');
  const [loggedIn, setLoggedIn] = useState(false);

  function handleClick() {
    setLoggedIn(!loggedIn);
    loggedIn === true ? setButtonText('Click me to login') : setButtonText('Click me to logout');
  }
  return (
    <div className="App">
      {
      loggedIn ? <h1>Welcome back!</h1> : 
      <form>
        <label>Name:<input type="text" name="name" /> </label>
      </form>
      }
  
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default App;
