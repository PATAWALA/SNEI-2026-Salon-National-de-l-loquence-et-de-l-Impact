export interface Actualite {
  id: string;
  slug: string;
  title: string;
  category: "Partenariat" | "Sponsor" | "Annonce";
  date: string;
  excerpt: string;
  content: string;
  image: string; // Chemin vers l'image dans public/
  badgeText: string;
}

export const ACTUALITES_SNEI: Actualite[] = [

    {
    id: "1",
    slug: "retour-en-images-jour-4",
    title: "RETOUR EN IMAGES - JOUR 4",
    category: "Annonce",
    date: "Septembre 2026",
    badgeText: "En Direct du Salon",
    image: "/jour-4.jpg", // Mets la photo de la journée 4 ici
    excerpt: "Retour en images sur une quatrième journée riche en échanges, en talents et en émotions à la veille de la grande finale.",
    content: `Retour en images sur une quatrième journée riche en échanges, en talents et en émotions.

Une journée marquée par de beaux moments de partage et de préparation, à la veille de la grande finale des compétitions.

Découvrez les temps forts de cette journée en quelques clichés et préparez-vous pour l'apothéose.`
  },
  {
    id: "2",
    slug: "partenariat-mr-sapologie",
    title: "Un partenariat qui apporte son savoir-faire au SNEI !",
    category: "Partenariat",
    date: "Septembre 2026",
    badgeText: "Nouveau Partenaire",
    image: "/sapologie.jpg", // Mets la vraie photo ici dans public/snei/
    excerpt: "Nous avons le plaisir de compter MR Sapologie parmi les partenaires du Salon National de l’Éloquence et de l’Impact.",
    content: `Nous avons le plaisir de compter MR Sapologie parmi les partenaires du Salon National de l’Éloquence et de l’Impact.

À travers ce partenariat, MR Sapologie contribue à nos côtés à faire de cette édition un espace de rencontres, d’expression, de créativité et de valorisation des talents.

Une belle collaboration qui vient renforcer la dynamique du SNEI et l’ambition de créer une expérience toujours plus riche pour la jeunesse.

Bienvenue dans l’aventure SNEI 2, MR Sapologie !`
  },
  {
    id: "3",
    slug: "sponsor-ready-study-go",
    title: "READY STUDY GO! : Un sponsor qui croit en la jeunesse",
    category: "Sponsor",
    date: "Septembre 2026",
    badgeText: "Sponsor Officiel",
    image: "/ready-study-go.jpg", // Mets la vraie photo ici dans public/snei/
    excerpt: "Le Salon National de l’Éloquence et de l’Impact est heureux de compter Ready Study Go! parmi ses sponsors.",
    content: `Le Salon National de l’Éloquence et de l’Impact est heureux de compter Ready Study Go! parmi ses sponsors.

Un engagement qui traduit une volonté commune : accompagner la jeunesse, encourager l’apprentissage et ouvrir la voie à de nouvelles opportunités.

Du 1er au 5 septembre 2026, retrouvons-nous à la Maison des Jeunes d’Amadahome pour une expérience riche en échanges, en découvertes et en inspiration.

Merci à Ready Study Go! pour sa confiance et son soutien au SNEI 2026.`
  }
];