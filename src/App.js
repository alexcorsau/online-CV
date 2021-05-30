import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { About } from './Pages/About/About';
import { OnlineCV } from './Pages/OnlineCV/OnlineCV';
import { Personal } from './Pages/Personal/Personal';
import { Form } from './Pages/Contact/Form';


function App() {
  return (
      <div className="App" id="app">
      <Router>
      <Header/>
      <Switch>
        <Route path="/cv">
          <OnlineCV/>
        </Route>
        <Route path="/personal">
          <Personal/>
        </Route>
        <Route path="/contact">
          <Form/>
        </Route>
         <Route path="/">
          <About/>
        </Route>
      </Switch>

      </Router>
      
      </div>
      
    );
}

export default App;
