import { Mic, Target, Users, Heart } from "lucide-react";

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Vision & Engagement
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            À propos du SNEI
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Le Salon National de l'Éloquence et de l'Impact est un espace d'excellence dédié à la jeunesse togolaise et africaine.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Notre Mission</h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Promouvoir les arts oratoires et les techniques de commercialisation efficace comme outils essentiels de développement personnel, professionnel et d’épanouissement. Nous croyons fermement qu'une jeunesse capable de structurer sa pensée, d'exprimer ses convictions et de négocier ses projets est une jeunesse prête à transformer son écosystème.
          </p>
        </div>

        {/* Valeurs Clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-slate-100 bg-white space-y-3">
            <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Éloquence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Donner une voix claire et persuasive à chaque participant pour défendre ses idées avec impact.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-100 bg-white space-y-3">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Commercialisation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transformer l'éloquence en opportunités concrètes grâce aux techniques modernes de vente et de négociation.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-100 bg-white space-y-3">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Communauté</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Créer un réseau solide entre jeunes leaders, mentors, entreprises partenaires et institutions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}