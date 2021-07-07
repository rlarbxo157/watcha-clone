import './App.css';
import Header from '../src/views/Header';
import {Switch,Route} from 'react-router-dom';
import Section from './components/Section';
function App() {
  return (
    <>
        <Header />
        <Switch>
          <Route path="/">
             <Section />
          </Route>
        </Switch>
    </>
  );
}

export default App;
