import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/register/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={submit} method="post">
        <CenteredForm>
          <label htmlFor="username"></label>
          Username:
          <br />
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label htmlFor="password"> </label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label htmlFor="confirm">Confirm password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            onChange={(e) => setUser({ ...user, confirm: e.target.value })}
          />
          <br />
          <input type="submit" value="Register" />
        </CenteredForm>
      </form>
    </>
  );
}
const CenteredForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
