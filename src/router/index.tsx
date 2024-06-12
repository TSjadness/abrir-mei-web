"use client";
import FormularioMei from "@/app/cadastro-mei/page";
import { DashboardPage } from "@/templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/cadastro-mei" element={<FormularioMei />} />
      </Routes>
    </BrowserRouter>
  );
}
