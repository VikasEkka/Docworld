import logo from './logo.svg';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {loginWithRedirect} = useAuth0();
  return (
    <div >
      <h1>Welcome to Docworld</h1>
      <button onClick={loginWithRedirect}>Login</button>
    </div>
  );
}

export default App;
