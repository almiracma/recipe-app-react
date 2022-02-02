import "./App.css";

const App = () => {
  const APP_ID = "8b846a17";
  const APP_KEY = "f07831675f1f92df328804b5215215af";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
