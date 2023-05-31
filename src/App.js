
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Calculator from './Calculator';
function App({history}) {
  return (
    <div className="App">
    <Header/>
   
    {/* <Body/> */}
    <Calculator/>
    <Footer/> 
    </div>
  );
}

export default App;
