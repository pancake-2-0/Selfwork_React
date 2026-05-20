import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";
function App() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <>
      <Navbar />
      <hr />
      <Header title="Title 1" />
      <Header title="Title 2" />
      <hr />
      <List names={names} />
      <hr />
      <Counter />
      <hr />
      <Form />

      <h1 className="title">Hello World</h1>
      <input id="test" type="text" />
      <hr />
      <label className="testLabel" htmlFor="test">
        Test Label
      </label>
    </>
  );
}

export default App;
