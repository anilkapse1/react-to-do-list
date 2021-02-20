
import './App.css';
import Header from './Header';

function App() {
  return (

    <div class="container">
      <div class="ctmGrid">
        <Header imgsrc="https://cdn.pixabay.com/photo/2019/08/09/21/20/james-dean-4395893_960_720.jpg"
          heroname="anil kapse"
          description="bahut bada actor"
        />

        <Header imgsrc="https://cdn.pixabay.com/photo/2019/05/16/16/50/man-4207514_960_720.jpg"
          heroname="ramesh kapse"
          description="bahut bada actor"
        />

        <Header imgsrc="https://cdn.pixabay.com/photo/2016/01/20/23/10/bowie-1152551_960_720.png"
          heroname="harshl kapse"
          description="bahut bada actor"
        />

      </div>
    </div>
  );
}
export default App;
