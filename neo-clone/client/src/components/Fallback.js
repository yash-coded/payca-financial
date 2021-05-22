import { Container } from "./Container";
import { Spinner } from "./Spinner";

function Fallback() {
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      display="flex"
      width="100vw"
      height="100vh"
    >
      <Spinner />
    </Container>
  );
}

export default Fallback;
