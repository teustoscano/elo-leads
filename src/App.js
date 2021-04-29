import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import SignUp from './pages/SignUp'
import Main from '.pages/Main'

import './App.scss'

function App() {
  return (
    <div className="App-wrapper">
      <Router>
        <Switch>
          <Route path="/">
            <SignUp />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
