import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Copy from './Copy';
import Form from './Form';
import Table from './Table';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import Form1 from './Form1'

function App() {
  return (
    <div className="App">
     
     <Router>
       <Switch>
         <Route exact path='/' component={Form1}/>
         <Route exact path='/:id' component={Create}/>
         <Route exact path='/Create' component={Create}/>
         
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
