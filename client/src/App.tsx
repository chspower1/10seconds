import React from "react";
import Layout from "./components/layout/Layout";
import Challenge from "./pages/Challenge";
import FinishModal from "./components/modal/ModalPortal";
import Overlay from "./components/layout/Overlay";
import { Routes, Route, HashRouter } from "react-router-dom";
import ModalPortal from "./components/modal/ModalPortal";
import RetryModal from "./components/modal/RetryModal";

function App() {
  return (
    <div className="App">
      <Layout>
        <ModalPortal />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Challenge />} />
          </Routes>
        </HashRouter>
      </Layout>
    </div>
  );
}

export default App;
