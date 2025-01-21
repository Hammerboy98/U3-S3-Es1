import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteCompanies from "./components/FavouriteCompanies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/company/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouriteCompanies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
