import { Button, Container, LoadingOverlay, Stack, Text } from "@mantine/core";
import { useState } from "react";


export function Counter (){

  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState('-');

  const incrementCounter = async () => {
    setLoading(true);
    const response = await (await fetch(`/api/counter`)).json();
    setCounter(response.counterValue);
    setLoading(false);
  };


  return (<Container>
      <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Stack p={"lg"} gap={'xl'}>
        <Text>Bam! 😄</Text>
        <Text>Count: {counter}</Text>
        <Button onClick={incrementCounter}>Increment Counter</Button>
      </Stack>
    </Container>)

}
