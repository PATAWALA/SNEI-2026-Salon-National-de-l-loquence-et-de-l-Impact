"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, MapPin } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Programme", href: "/programme" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Topbar d'infos rapides */}
      <div className="bg-emerald-900/90 text-xs py-1.5 px-4 text-center sm:flex sm:justify-between sm:text-left max-w-7xl mx-auto font-medium">
        <div className="flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1 text-amber-300">
            <Calendar className="w-3.5 h-3.5" /> 1er - 5 Septembre 2026
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-200">
            <MapPin className="w-3.5 h-3.5" /> Amadahomé, Lomé (Togo)
          </span>
        </div>
        <div className="hidden sm:block text-slate-300">
          Salon National de l'Éloquence et de l'Impact • Édition 2
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Officiel SNEI */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
              <Image
                src="/logo.jpg" // Remplace par le nom exact de ton fichier dans public/ (ex: /snei-logo.png)
                alt="Logo SNEI 2026"
                fill
                className="object-contain p-1 group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight block text-white">
                SNEI <span className="text-amber-400">2026</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase block">
                Éloquence & Impact
              </span>
            </div>
          </Link>

          {/* Nav Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition shadow-md hover:shadow-amber-400/20 text-sm"
            >
              Réserver sa place
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-xl text-sm mt-4"
          >
            Réserver sa place
          </Link>
        </div>
      )}
    </header>
  );
}