import logo from './logo.svg';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {loginWithRedirect,user,logout,isAuthenticated} = useAuth0();
  return (
    <div >
      <h1>Welcome to Docworld</h1>
      <button onClick={loginWithRedirect}>Login</button>
      <button onClick={logout}>Logout</button>
      <h3>User is {isAuthenticated ? "logged in " : "not logged in "}</h3>
    </div>
  );
}

export default App;
