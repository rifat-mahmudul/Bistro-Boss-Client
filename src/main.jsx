import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/Routes";
import './index.css'
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <HelmetProvider>
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>
    </HelmetProvider>
    
  </BrowserRouter>
);
