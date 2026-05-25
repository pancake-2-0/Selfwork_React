import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";
import Main from "./components/Main.jsx";
import Section from "./components/Section.jsx";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";

function App() {
  const nameList = ["Alice", "Bob", "Charlie"];
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleClick = () => {
    setSubmittedData({
      name,
      mail,
    });
  };

  return (
    <>
      <Navbar />
      <hr />
      <Header title="Title 1" />
      <Header title="Title 2" />
      <hr />

      <Main>
        <List>
          {nameList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </List>
      </Main>

      <hr />
      <Counter />
      <hr />
      <Form>
        <Section>
          <label htmlFor="name">Name:</label>
          <Input id="name" value={name} onChange={handleNameChange} />

          <label htmlFor="mail">E-mail:</label>
          <Input
            id="mail"
            type="email"
            value={mail}
            onChange={handleMailChange}
          />

          <Button type="button" onClick={handleClick}>
            Submit
          </Button>
        </Section>
      </Form>

      {submittedData && (
        <div>
          <h3>Dati inviati</h3>
          <p>Nome: {submittedData.name}</p>
          <p>Email: {submittedData.mail}</p>
        </div>
      )}

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
