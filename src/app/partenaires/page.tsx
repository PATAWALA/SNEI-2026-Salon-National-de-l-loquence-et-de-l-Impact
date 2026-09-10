import Image from "next/image";
import { ACTUALITES_SNEI } from "@/data/actualites";
import ActualiteCard from "@/components/ActualiteCard";
import { Handshake } from "lucide-react";

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
            <Handshake className="w-4 h-4" />
            <span>Sponsors & Partenaires</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Ils font rayonner le SNEI 2026
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Découvrez les institutions et marques engagées aux côtés de la jeunesse pour cette 2ème édition.
          </p>
        </div>

        {/* Grille des annonces partenaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACTUALITES_SNEI.map((item) => (
            <ActualiteCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}