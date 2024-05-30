import { useRouteError } from "react-router-dom";
import { styled } from "styled-components";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <h1>{error.error.message}</h1>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
