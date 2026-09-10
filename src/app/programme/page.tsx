import { Calendar, Clock, MapPin } from "lucide-react";

export default function ProgrammePage() {
  const schedule = [
    {
      day: "Jour 1",
      date: "1er Septembre 2026",
      title: "Ouverture & Fondations de l'Art Oratoire",
      desc: "Cérémonie d'ouverture officielle, accueil des délégations et masterclass inaugurale sur la gestion du trac et la posture scénique.",
    },
    {
      day: "Jour 2",
      date: "2 Septembre 2026",
      title: "Techniques de Commercialisation & Négociation",
      desc: "Ateliers pratiques sur la négociation commerciale, la vente persuasive et l'art de pitcher un projet devant des investisseurs.",
    },
    {
      day: "Jour 3",
      date: "3 Septembre 2026",
      title: "Leadership & Développement Personnel",
      desc: "Panels de discussion avec des dirigeants d'entreprises et mentors sur l'éthique, le charisme et la gestion d'équipe.",
    },
    {
      day: "Jour 4",
      date: "4 Septembre 2026",
      title: "Grand Concours National d'Éloquence",
      desc: "Passage des candidats présélectionnés devant le jury d'experts sur des thématiques d'impact national et sous-régional.",
    },
    {
      day: "Jour 5",
      date: "5 Septembre 2026",
      title: "Gala d'Impact & Remise des Prix",
      desc: "Grande soirée de clôture, remise des trophées aux lauréats et mise en réseau avec les sponsors officiels.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            1er - 5 Septembre 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Programme Général
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            📍 Maison des Jeunes d’Amadahome, Lomé, Togo
          </p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="bg-emerald-900 text-white p-4 rounded-xl text-center shrink-0 w-full sm:w-32">
                <span className="text-xs font-bold text-amber-400 block uppercase">
                  {item.day}
                </span>
                <span className="text-sm font-semibold block pt-1">
                  {item.date}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}