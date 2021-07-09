import './App.css';
import Header from './views/Header';
import {Switch,Route} from 'react-router-dom';
import Section from './components/Section/index';
import Footer from './views/Footer';
import Signup from './components/Signup';
function App() {
  return (
    <>
        <Header />
        <Switch>
          <Route path="/">
             <Section />
             
          </Route>
        </Switch>

        <Signup />
        <Footer />
    </>
  );
}

export default App;
