import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample React app</h1>
        <h2>Hello, {user.email}</h2>
        <h2>
          <button onClick={signOut}>Sign out</button>
        </h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
