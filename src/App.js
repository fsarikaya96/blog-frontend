import React from "react";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import PublicTheme from "./themes/PublicTheme";
import AdminRoute from "./routes/AdminRoute";
import AdminTheme from "./themes/AdminTheme";

function App() {
  return (
    <>
      <PublicTheme>
        <main className="container mx-auto px-2 sm:px-4 pt-12">
          <div className="flex flex-col lg:flex-row justify-between gap-x-8 mb-20">
            <PublicRoute />
          </div>
        </main>
      </PublicTheme>

      <AdminTheme>
        <AdminRoute />
      </AdminTheme>
    </>
  );
}

export default App;
