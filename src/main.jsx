import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/Routes";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppRoutes></AppRoutes>
  </BrowserRouter>
);
