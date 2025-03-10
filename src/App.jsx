import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./page/Product";
import Pricing from "./page/Pricing";
import Homepage from "./page/Homepage";
import PagesNoFound from "./page/PageNotFound";
import Login from "./page/Login";
import AppLayout from "./page/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const URL = "http://localhost:5000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} loading={isLoading} />}
          />
          <Route path="cities" element={<p>cities</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>List of Form</p>} />
        </Route>
        <Route path="*" element={<PagesNoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
