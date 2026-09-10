import { ACTUALITES_SNEI } from "@/data/actualites";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ACTUALITES_SNEI.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        {/* Bouton retour */}
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour aux actualités
        </Link>

        {/* Métadonnées */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
            {article.badgeText}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
          {article.title}
        </h1>

        {/* Image principale */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-md bg-slate-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenu du texte */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {article.content}
        </div>

        {/* Footer d'article */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            SNEI 2026 • 1er au 5 Septembre 2026, Lomé
          </p>
          <button className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition">
            <Share2 className="w-4 h-4" />
            Partager
          </button>
        </div>
      </article>
    </main>
  );
}