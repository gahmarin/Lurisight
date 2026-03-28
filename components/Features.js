"use client";

import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="bg-[#071A2F] py-20 text-center">
      <h2 className="text-3xl mb-10">Funcionalidades</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <Card 
          title="Análise Inteligente" 
          desc="IA que interpreta documentos automaticamente" 
        />

        <Card 
          title="Destaque Automático" 
          desc="Identificação de cláusulas importantes" 
        />

        <Card 
          title="Busca Avançada" 
          desc="Encontre informações críticas rapidamente" 
        />
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#0E2A47] p-6 rounded-xl w-72"
    >
      <h3 className="text-[#6C63FF] mb-2">{title}</h3>
      <p className="opacity-70">{desc}</p>
    </motion.div>
  );
}
