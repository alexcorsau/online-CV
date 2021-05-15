

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header/Header';
import { About } from './Pages/About/About';
import { OnlineCV } from './Pages/OnlineCV/OnlineCV';
import { Personal } from './Pages/Personal/Personal';
import { Contact } from './Pages/Contact/Contact';


function App() {
  return (
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
          <Contact/>
        </Route>
         <Route path="/">
          <About/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
