import { useRef } from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputAgeRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={inputNameRef} />
      <Input id="age" label="Your age" type="number" ref={inputAgeRef} />

      <div style={{ display: "flex", gap: "1rem" }}>
        <Button>Submit</Button>
        <Button href="https://reactjs.org">Learn more</Button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Container as={Button} href="https://google.com">
          Click me
        </Container>
      </div>
    </main>
  );
}

export default App;
