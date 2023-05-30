
import './App.css';
import Header from './Header';
import History from './History';
import Body from './Body';
import { Calculate } from '@mui/icons-material';
import Calculator from './Calculator';
function App({history}) {
  return (
    <div className="App">
    <Header/>
   
    {/* <Body/> */}
    <Calculator/> 
    </div>
  );
}

export default App;
