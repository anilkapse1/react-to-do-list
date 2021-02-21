
import './App.css';
import Header from './Header';
import Data from './Data'

function App() {

  function  callFun(val) {
    return(
      <Header imgsrc={val.imgsrc}
        userName={val.userName}
        roll={val.roll}
      />
    )
  }

  return (
    <div className="container">
      <div className="ctmGrid">
        {Data.map(callFun)};
      </div>
    </div>
  );
}
export default App;
