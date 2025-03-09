import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./page/Product";
import Pricing from "./page/Pricing";
import Homepage from "./page/Homepage";
import PagesNoFound from "./page/PageNotFound";
import Login from "./page/Login";
import AppLayout from "./page/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="cities" element={<p>List of Cities</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>List of Form</p>} />
        </Route>
        <Route path="*" element={<PagesNoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
