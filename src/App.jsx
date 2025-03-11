import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./page/Product";
import Pricing from "./page/Pricing";
import Homepage from "./page/Homepage";
import PagesNoFound from "./page/PageNotFound";
import Login from "./page/Login";
import AppLayout from "./page/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import City from "./components/City";

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
        <Route path="product" element={<Products />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} loading={isLoading} />}
          />

          {/* steps of creating react params 
          1. creating route
          2. link that route
          3. reading state of route params*/}
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} loading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PagesNoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
