import logo from './logo.svg';
import './App.css';
import BigCube from './BigCube';
import "./style.css";
import Circle from './Circle';
import Image from './Image';
function App() {
  return (
    <div className="App">
      <BigCube >
        <div className='bigcube'>
          <div className="red">
            <Circle color="yellowgreen">
              <Image link="https://i.pinimg.com/originals/77/69/fb/7769fba1d0642e68aaa1dc17f9aa8c85.jpg" />
            </Circle></div>
          <div className="yellow">
            <Circle color="#F3C265">
              <Image link="https://pbs.twimg.com/media/D2G_DzcW0AAYiSL.jpg:large" />
            </Circle></div>
          <div className="aqua">
            <Circle color="pink">
              <Image link="http://coupletesting.com/wp-content/uploads/2020/12/3-1024x829.jpeg" />
            </Circle></div>
          <div className="purple">
            <Circle color="#6DC3C3">
              <Image link="http://coupletesting.com/wp-content/uploads/2020/12/3-1024x829.jpeg" />
            </Circle></div>
        </div>
      </BigCube>
    </div>
  );
}

export default App;
