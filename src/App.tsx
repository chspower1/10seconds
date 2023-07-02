import React from "react";
import Layout from "./components/layout/Layout";
import Challenge from "./pages/Challenge";
import FinishModal from "./components/modal/ModalPortal";
import Overlay from "./components/layout/Overlay";

function App() {
  return (
    <div className="App">
      <Layout>
        <Challenge />
      </Layout>
    </div>
  );
}

export default App;
