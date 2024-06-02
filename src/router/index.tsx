
"use client"
import Formulario from "@/app/abrir-mei/formulario/page";
import { DashboardPage } from "@/templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/abrir-mei/formulario/" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}