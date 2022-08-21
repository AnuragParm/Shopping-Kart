import Header from "./component/Header";
import Cart from "./component/Cart";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" element={<Cart />} exact></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
