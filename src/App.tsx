import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <div style={{ display: "flex", gap: "1rem" }}>
        <Button>Submit</Button>
        <Button href="https://reactjs.org">Learn more</Button>
      </div>
    </main>
  );
}

export default App;
