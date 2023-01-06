import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { About, Home, Products } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
