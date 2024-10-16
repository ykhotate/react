import { useState } from "react";
import { NavigateToRadioProgram } from "../../components";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <NavigateToRadioProgram />
      </div>
    </>
  );
};

export default Home;
