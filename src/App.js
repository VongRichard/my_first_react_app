import './App.css';

// Component
// Props object is passed as an argument in the component
const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

// Functional Component
// Arrow Functions are more popular than regular Function Declaration.
const App = () => {
  return (
    <div className="App">
        <Person name={"John"} lastName={"Doe"} age={"25"}/>
        <Person name={"Mary"} lastName={"Doe"} age={"24"}/>
    </div>
  );
}

export default App;
