import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/Routes";
import './index.css'
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
        <AuthProvider>
          <AppRoutes></AppRoutes>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
