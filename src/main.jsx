import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/Routes";
import './index.css'
import AuthProvider from "./Provider/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes></AppRoutes>
    </AuthProvider>
  </BrowserRouter>
);
