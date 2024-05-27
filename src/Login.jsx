import { styled } from "styled-components";
import { useNavigate, useOutletContext } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    localStorage.setItem("accessToken", JSON.stringify(data));
    setUser(JSON.parse(localStorage.getItem("accessToken")));
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
          <input type="submit" value="Login" />
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
