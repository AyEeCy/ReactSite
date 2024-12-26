import Anasayfa from "./Anasayfa";
import Hakkimda from "./Hakkimda";
import Iletisim from "./Iletisim";
import Diller from "./Diller";
import Isler from "./Isler";
import "./style/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path='/' element={<Anasayfa></Anasayfa>}></Route>
    <Route path="/hakkimda" element={<Hakkimda></Hakkimda>}></Route>
    <Route path="/iletisim" element={<Iletisim></Iletisim>}></Route>
    <Route path="/diller" element={<Diller></Diller>}></Route>
    <Route path="/isler" element={<Isler></Isler>}></Route>
    </Routes>
  );
}

export default App;
