import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./page/Product";
import Pricing from "./page/Pricing";
import Homepage from "./page/Homepage";
import PagesNoFound from "./page/PageNotFound";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/logint" element={<Login />} />
        <Route path="*" element={<PagesNoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
