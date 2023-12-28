import { useState, useEffect } from 'react';
import './App.css';

// Component
// Props object is passed as an argument in the component
// State in react is a plain JavaSript object used to represent a piece 
// of information about a components current situation. Managed by the component itself.
// When you use a state, you basically need to use a hook as well.
// Never mutate the state manually.


// Functional Component
// Arrow Functions are more popular than regular Function Declaration.
const App = () => {
  const [counter, setCounter] = useState(0);

  // Happens at the start when the page loads
  useEffect(() => {
    alert("You've changed the counter to " + counter);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
