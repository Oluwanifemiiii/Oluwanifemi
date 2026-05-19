import { useState, useCallback } from "react";
import "./app.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Floaters, CursorBlob, useMouseTilt } from "./components/Floaters";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useMouseTilt();

  return (
    <>
      <Floaters />
      <CursorBlob />
      <Nav page={page} onNavigate={navigate} />

      {page === "home"     && <Home     onNavigate={navigate} />}
      {page === "projects" && <Projects onNavigate={navigate} />}

      <Footer />
    </>
  );
}