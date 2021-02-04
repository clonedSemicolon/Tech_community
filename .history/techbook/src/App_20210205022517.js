
import { Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';


function App() {

  const user=null;
  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) :

      (
      <Header/>
      <div className="app_body">
      
      <Sidebar/>
      <Feed/>
      
      

      </div>
      
    </div>
  );
}

export default App;

//avishakcb
//CiKas0n86a1A7Xsm