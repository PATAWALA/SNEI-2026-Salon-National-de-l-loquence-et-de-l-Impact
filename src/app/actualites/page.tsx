import { ACTUALITES_SNEI } from "@/data/actualites";
import ActualiteCard from "@/components/ActualiteCard";
import { Newspaper } from "lucide-react";

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Newspaper className="w-4 h-4" />
            <span>SNEI 2026 • Fil d'actualité</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Actualités & Partenariats
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Suivez en direct l'évolution de la 2ème édition du Salon National de l'Éloquence et de l'Impact, nos nouveaux sponsors et les temps forts à venir.
          </p>
        </div>

        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTUALITES_SNEI.map((article) => (
            <ActualiteCard key={article.id} item={article} />
          ))}
        </div>
      </div>
    </main>
  );
}