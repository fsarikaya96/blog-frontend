import React from "react";
import "./App.css";
import Header from "./compenents/layout/Public/Header";
import Footer from "./compenents/layout/Public/Footer";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <>
      <Header />

      <main className="container mx-auto px-2 sm:px-4 pt-12">
        <div className="flex flex-col lg:flex-row justify-between gap-x-8 mb-20">
          <PublicRoute />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
