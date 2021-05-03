import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import SignUp from './pages/SignUp'
import Main from './pages/Main'

import './App.scss'

function App() {
  return (
    <div className="App-wrapper">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp}/>
          <Route path="/main" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
