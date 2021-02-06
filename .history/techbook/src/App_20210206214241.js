
import { Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Sticky from 'react-stickynode'
import Widget from './components/Widget';
import { useStateValue } from './StateProvider';


function App() {

  const [{user},dispatch]=useStateValue();

  
  return (
    <div className="App">
      {
        !user ? (
          <Login/>
        ) : (

          <>

      <Header/>
      <div className="app_body">

        <Sticky>

        <Sidebar/>
        </Sticky>
      
      
      
      
      <Feed/>
      
      

      </div>
      </>

    )}    
    </div>
  );
}

export default App;

//avishakcb
//CiKas0n86a1A7Xsm