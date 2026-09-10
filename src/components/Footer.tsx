import Link from "next/link";
import { Mic, MapPin, Calendar, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Col 1 : À propos du SNEI */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-amber-400 flex items-center justify-center text-slate-950 font-bold">
              <Mic className="w-4 h-4 text-slate-950" />
            </div>
            <span className="text-xl font-black text-white">SNEI 2026</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            Promouvoir les arts oratoires et les techniques de commercialisation efficace comme outils de développement personnel, professionnel et d’épanouissement pour la jeunesse.
          </p>
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
            Ready • Study • Go !
          </div>
        </div>

        {/* Col 2 : Liens Rapides */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-400 transition">Accueil</Link></li>
            <li><Link href="/a-propos" className="hover:text-amber-400 transition">À propos</Link></li>
            <li><Link href="/programme" className="hover:text-amber-400 transition">Programme (5 jours)</Link></li>
            <li><Link href="/actualites" className="hover:text-amber-400 transition">Sponsors & Actualités</Link></li>
          </ul>
        </div>

        {/* Col 3 : Infos Événement */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Informations
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>1er - 5 Septembre 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Maison des Jeunes d’Amadahome, Lomé, Togo</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>contact@snei-togo.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Baseline Bottom */}
      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 SNEI Togo • Tous droits réservés.</p>
        <p className="text-slate-400">
          Plateforme façonnée par <span className="font-semibold text-amber-400">Abdoulaye Patawala</span>
        </p>
      </div>
    </footer>
  );
}