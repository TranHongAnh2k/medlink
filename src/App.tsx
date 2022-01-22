import {
  Routes,
  Route,
} from "react-router-dom";
import AddProduct from "./screen/HomeScreen/AddProduct";
import ListProduct from "./screen/HomeScreen/ListProduct";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/nhathuoc' element={<HomeScreen />}>
        <Route index element={<ListProduct />} />
        <Route path='taophieunhapkho' element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
