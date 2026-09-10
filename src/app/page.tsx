import Link from "next/link";
import Image from "next/image";
import { 
  Mic, Calendar, MapPin, ArrowRight, Award, 
  Users, CheckCircle2, Star, Sparkles, Send 
} from "lucide-react";
import { ACTUALITES_SNEI } from "@/data/actualites";
import ActualiteCard from "@/components/ActualiteCard";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Cercles décoratifs d'arrière-plan */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Badge officiel */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-8 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>2ème Édition Officielle • Lomé, Togo</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Salon National de l'Éloquence <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              & de l'Impact
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed mb-10 font-normal">
            Promouvoir les arts oratoires et les techniques de commercialisation efficace comme outils de développement personnel, professionnel et d’épanouissement pour la jeunesse.
          </p>

          {/* Infos Clés (Dates & Lieu) */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-200 mb-10">
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>01 - 05 Septembre 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>Maison des Jeunes d’Amadahome</span>
            </div>
          </div>

          {/* Boutons Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#inscription"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-amber-400/10 flex items-center justify-center gap-2 text-base"
            >
              <span>Réserver mon Pass</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#programme"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition flex items-center justify-center gap-2 text-base"
            >
              <span>Découvrir le programme</span>
            </a>
          </div>
        </div>
      </section>

            {/* 5. DERNIÈRES ACTUALITÉS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                Dernières Actualités & Annonces
              </h2>
              <p className="text-slate-600 text-sm">
                Restez informés des nouveautés et partenariats du SNEI 2026.
              </p>
            </div>
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-900"
            >
              <span>Voir tous les articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTUALITES_SNEI.map((item) => (
              <ActualiteCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. BANDEAU SPONSORS ET PARTENAIRES */}
      <section className="bg-slate-900 border-y border-slate-800 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Ils soutiennent la jeunesse et la créativité au SNEI 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-2xl border border-slate-700/50">
              <Award className="w-6 h-6 text-amber-400" />
              <div>
                <span className="text-white font-bold block text-sm">MR Sapologie</span>
                <span className="text-slate-400 text-xs">Partenaire Officiel</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-2xl border border-slate-700/50">
              <Star className="w-6 h-6 text-emerald-400" />
              <div>
                <span className="text-white font-bold block text-sm">READY STUDY GO !</span>
                <span className="text-slate-400 text-xs">Sponsor Officiel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES 3 PILIERS DU SALON */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Pourquoi participer au SNEI 2026 ?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Une expérience unique pensée pour valoriser les talents, encourager l'apprentissage et ouvrir la voie à de nouvelles opportunités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Arts Oratoires</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Maîtrisez la prise de parole en public, l'art de convaincre et la puissance du discours pour impacter votre auditoire.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-800">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Commercialisation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Développez des techniques de vente efficaces et apprenez à négocier comme un professionnel pour vos projets et entreprises.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Réseautage & Impact</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rencontrez des mentors, des partenaires stratégiques et des recruteurs prêts à soutenir les talents de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APERÇU DU PROGRAMME */}
      <section id="programme" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
              Du 1er au 5 Septembre 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              5 Jours d'Immersion & d'Équipement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { day: "Jour 1", title: "Cérémonie & Éloquence" },
              { day: "Jour 2", title: "Ateliers Vente & Negociation" },
              { day: "Jour 3", title: "Masterclass Leadership" },
              { day: "Jour 4", title: "Grand Concours National" },
              { day: "Jour 5", title: "Gala & Remise des Prix" },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 text-center space-y-2">
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full inline-block">
                  {item.day}
                </span>
                <h4 className="font-bold text-sm text-slate-100 pt-2">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORMULAIRE D'INSCRIPTION RAPIDE */}
      <section id="inscription" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-emerald-950 p-8 sm:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Prêt à vivre l'expérience SNEI 2026 ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Réservez votre place dès maintenant pour le plus grand rassemblement d'éloquence et d'impact du Togo.
            </p>

            <form className="space-y-4 text-left pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom & Prénoms"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Numéro WhatsApp"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-base"
              >
                <Send className="w-5 h-5" />
                <span>Confirmer ma pré-inscription</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}