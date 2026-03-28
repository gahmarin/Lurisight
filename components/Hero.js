"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
      
      <div className="max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Inteligência que revela o essencial no jurídico
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="opacity-80 mb-6"
        >
          Analise documentos jurídicos com IA, destaque cláusulas e obtenha insights automáticos.
        </motion.p>

        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#6C63FF] px-6 py-3 rounded-xl"
          >
            Começar
          </motion.button>
        </Link>
      </div>

      <img src="/logo.png" alt="logo" className="w-80 mt-10 md:mt-0" />
    </section>
  );
}
