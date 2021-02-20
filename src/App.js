
import './App.css';
import Header from './Header';
import Data from './Data'

function App() {

  return (
    <div className="container">
      <div className="ctmGrid">
        <Header imgsrc={Data[0].imgsrc}
          userName={Data[0].userName}
          roll={Data[0].roll}
        />

        <Header imgsrc={Data[1].imgsrc}
          userName={Data[1].userName}
          roll={Data[1].roll}
        />

      <Header imgsrc={Data[2].imgsrc}
        userName={Data[2].userName}
        roll={Data[2].roll}
      />
      </div>
    </div>
  );
}
export default App;
