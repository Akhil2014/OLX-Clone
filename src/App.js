
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Footersec from "./Components/Footersec";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { getProductData, removeData } from "./Redux/ProductReducer/action";


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [country , setCountry] = useState("india")
  const [query , setQuery] = useState("")
  const sendQuery  = () => {
    if(country && query) {
      dispatch(removeData())
      console.log(country , query)
      navigate("/products")
      let data = country + " " + query
      dispatch(getProductData(query))
    }
  }
  return (
    <div>
      <Navbar country={country} setCountry={setCountry} sendQuery={sendQuery} query={query} setQuery={setQuery} />
      <MainRoutes />
      <Footer />
      <Footersec />
    </div>
  );
}

export default App;
