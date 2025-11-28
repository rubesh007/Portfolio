import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

import Background from "./components/Background";

import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider>
      <Background />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </Layout>
      <Toaster position="bottom-right" theme="dark" />
    </ThemeProvider>
  );
}

export default App;
