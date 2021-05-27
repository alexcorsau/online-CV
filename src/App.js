import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { About } from './Pages/About/About';
import { OnlineCV } from './Pages/OnlineCV/OnlineCV';
import { Personal } from './Pages/Personal/Personal';
import { Contact } from './Pages/Contact/Contact';
import { Home } from './Pages/Home/Home';


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
          <Contact/>
        </Route>
         <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      </Router>
      
      </div>
      
    );
}

export default App;
