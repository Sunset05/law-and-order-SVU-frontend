import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import FrontPage from './pages/FrontPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header />
      
      <FrontPage />

      
      
    </Router>
  );
}

export default App;
