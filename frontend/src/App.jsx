import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error("Erreur:", err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
