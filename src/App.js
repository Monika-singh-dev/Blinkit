import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Description from "./components/Description";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logincard from "./components/Logincard";

function App() {
  console.log("app");
  return (
    <ChakraProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Products} />
          <Route path="/category/:name" Component={Description} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Logincard />
    </ChakraProvider>
  );
}

export default App;
