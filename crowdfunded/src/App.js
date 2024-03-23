
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/main/Home';
import Basics from './components/dashboard/projects/Basics';
import Funding from './components/dashboard/projects/Funding';
import Reward from './components/dashboard/projects/Reward';
import Teams from './components/dashboard/projects/Teams';
import PreLaunch from './components/dashboard/projects/PreLaunch';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Content from './components/dashboard/projects/Content';
import ProjectDetail from './components/main/ProjectDetail';
import Projects from './components/main/Projects';
import Checkout from './components/main/Checkout';
function App() {
  return (
    <Router>
      <div>
       <Switch>
       <Route  path="/dashboard" component={Dashboard}/>
       <Route exact path="/" component={Home}/>
       <Route exact path="/basics" component={Basics}/>
       <Route exact path="/funding" component={Funding}/>
       <Route exact path="/reward" component={Reward}/>
       <Route exact path="/prelaunch" component={PreLaunch}/>
       <Route exact path="/team" component={Teams}/>
       <Route exact path="/signin" component={Login}/>
       <Route exact path="/register" component={SignUp}/>
       <Route exact path="/content" component={Content}/>
       <Route exact path="/details/:id" render={(props) => <ProjectDetail {...props} />} />
       <Route exact path="/projectlist" component={Projects}/>
       <Route exact path="/checkout" component={Checkout}/>
       </Switch>
      </div>
    </Router>
  );
}
export default App;
