import './App.css';
import Calendar from './Component/Calendar/Calendar';
import HomePage from './Component/HomePage/HomePage';
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Calendar />
      <div className='p-3 rounded-full absolute top-1/2 right-0 bg-black text-white'><GiHamburgerMenu /></div>
    </div>
  );
}

export default App;
