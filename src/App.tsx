import { useRef } from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Form, { type FormHandle } from "./components/Form";
import Input from "./components/Input";

function App() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputAgeRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
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
      </Form>
    </main>
  );
}

export default App;
