import Hero from "./components/Hero";
import Work from "./components/Work";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "./shared/Layout";
import Galle from "./components/Galle";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                {" "}
                <Hero />
              </Layout>
            }
          />
          <Route
            path="/work"
            element={
              <Layout>
                {" "}
                <Work />{" "}
              </Layout>
            }
          />
          <Route
            path="/galle"
            element={
              <Layout>
                {" "}
                <Galle />{" "}
              </Layout>
            }
          />
          <Route
            path="/skills"
            element={
              <Layout>
                {" "}
                <Skills />{" "}
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
