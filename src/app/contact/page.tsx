import { MapPin, Phone, Mail, Calendar, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Infos de contact */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Contact Officiel
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Rejoignez l'aventure SNEI 2026
            </h1>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Vous souhaitez devenir partenaire, réserver un stand, inscrire une délégation ou poser une question ? Notre équipe est à votre écoute.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100">
              <MapPin className="w-6 h-6 text-emerald-700 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Lieu de l'événement</h4>
                <p className="text-xs text-slate-600">Maison des Jeunes d’Amadahome, Lomé, Togo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100">
              <Calendar className="w-6 h-6 text-emerald-700 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Dates retenues</h4>
                <p className="text-xs text-slate-600">Du 1er au 5 Septembre 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100">
              <Mail className="w-6 h-6 text-emerald-700 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                <p className="text-xs text-slate-600">contact@snei-togo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Envoyer un message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-700"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Numéro WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+228 XX XX XX XX"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-700"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sujet
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-700">
                <option>Pré-inscription / Pass</option>
                <option>Demande de Partenariat</option>
                <option>Sponsor de l'événement</option>
                <option>Autre demande</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Votre message..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-700"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer le message</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}