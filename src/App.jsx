import { useState } from "react";
import { styled } from "styled-components";
import { Navigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
function App() {
  const [user, setUser] = useState();
  function logout() {
    localStorage.removeItem("accessToken");
    Navigate("/");
  }

  return (
    <>
      <Main>
        <Navbar>
          <Link to="/">Blog</Link>

          <AccountLinks>
            {localStorage.getItem("accessToken") ? (
              <Link onClick={logout}>Logout</Link>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </AccountLinks>
        </Navbar>
        <Outlet context={[user, setUser]} />
      </Main>
    </>
  );
}
const Main = styled.section`
  background: #fffbe9;
  color: #181818;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 10vh;
  width: 60%;
  border-bottom: 1px solid #ad8b73;
  a {
    color: #ad8b73;
    font-size: 2.5rem;
  }
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    & {
      width:80%;
    }
`;
const AccountLinks = styled.section`
  display: flex;
  gap: 20px;
  a {
    font-size: 1.5rem;
  }
`;

export default App;
