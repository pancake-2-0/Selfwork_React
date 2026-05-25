import { useState, useEffect } from "react";
export default function LoadingData() {
  const [users, setUsers] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await promise.json();
    setUsers(json);
    console.log(json);
  };

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        getData();
        setIsLoading(false);
      }, 2000);
    }
  }, [trigger]);

  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
      setTrigger(false);
      setUsers([]);
    } else {
      setIsVisible(true);
      setTrigger(true);
      setIsLoading(true);
    }
  };

  return (
    <>
      <h1>Selfwork React - Loading Data</h1>
      <button onClick={handleClick}>Click</button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {isVisible &&
          users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            );
          })}
      </ul>
    </>
  );
}
