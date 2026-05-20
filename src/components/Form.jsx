import { useState } from "react";

export default function Form() {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name,
      mail,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="mail">E-mail:</label>
        <input
          id="mail"
          type="email"
          onChange={(e) => setMail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Dati inviati</h3>
          <p>Nome: {submittedData.name}</p>
          <p>Email: {submittedData.mail}</p>
        </div>
      )}
    </>
  );
}
