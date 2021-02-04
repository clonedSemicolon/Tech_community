
import { Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
      
      <Sidebar/>
      <Feed/>
      <Widget/>

      </div>
      
    </div>
  );
}

export default App;

//R0Ju332Xo2mwgqPP