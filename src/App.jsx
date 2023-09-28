import reactLogo from "./assets/react.svg";
import { Member } from "./components/Member";

function App() {
  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>RACE Your React 🎉</h1>
      </header>
      <Member member={{ firstName: "Peter", lastName: "Lind" }} />
      <Member member={{ firstName: "Lars", lastName: "Hansen" }} />
      <Member member={{ firstName: "Race", lastName: "Race" }} />
    </>
  );
}

export default App;
