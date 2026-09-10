import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Actualite } from "@/data/actualites";

export default function ActualiteCard({ item }: { item: Actualite }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Image container */}
      <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-4 left-4 bg-emerald-700 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {item.badgeText}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
          <span>{item.date}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 mb-3">
          {item.title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {item.excerpt}
        </p>

        <Link
          href={`/actualites/${item.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition mt-auto"
        >
          Lire l'article
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}