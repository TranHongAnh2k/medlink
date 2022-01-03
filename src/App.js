
import {
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen";


function App() {
  return (
    <Routes>
      <Route path ='/' element={<LoginScreen/>} />
      <Route path ='/nhapkho' element={<HomeScreen/>} />
    </Routes>
  );
}

export default App;
