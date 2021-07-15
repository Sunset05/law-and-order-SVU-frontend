import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import FrontPage from './pages/FrontPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocsPage from './pages/DocsPage';


function App() {
  return (
    <Router>
      <Header />

      
      <Switch>
        <Route exact path='/docs' component={DocsPage} />
        <Route path='/' component={FrontPage} />


      </Switch>
      

      
      
    </Router>
  );
}

export default App;
