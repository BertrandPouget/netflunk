// app/data/items.ts
export type Item = {
  slug: string;
  title: string;
  year: number;
  genre: string;
  tagline?: string;
  plot: string;
  poster: string;     // cover verticale
  background: string; // hero background
  src: string;        // film
  trailerSrc: string;    // trailer
};

export const ITEMS: Item[] = [
  {
    slug: "flunkgasse",
    title: "Flunkgasse",
    year: 2014,
    genre: "Avventura, Commedia",
    tagline: "La genesi del mito.",
    plot:
      "Un gruppo di studenti scopre Monaco per la prima volta, tra imprevisti esilaranti e legami che segneranno l’inizio di un viaggio leggendario.",
    poster: "/flunkgasse_cover.png",
    background: "/backgrounds/flunkgasse_bg.png",
    src: "https://drive.google.com/file/d/1g5G-222uqzTFFxKMvsvb79AxtC5EIKE8/preview",
    trailerSrc: "https://drive.google.com/file/d/1ZBI7vkgEKbJTPDEelwiEF6AXOhh8kBDe/preview",
  },
  {
    slug: "kraillinger",
    title: "Kraillinger",
    year: 2015,
    genre: "Drammatico, Fantasy",
    tagline: "Non tutti i sequel sono meglio dell'originale.",
    plot:
      "Di ritorno a Monaco, il gruppo si trova di fronte a una misteriosa porta che li trascina in un’avventura sospesa tra amicizia, conflitti e segreti nascosti.",
    poster: "/kraillinger_cover.png",
    background: "/backgrounds/blitzkrieg_bg.png",
    src: "https://drive.google.com/file/d/12KiT79uKGjxI2ZLWT_tEjMAyEChCTmmk/preview",
    trailerSrc: "https://drive.google.com/file/d/1IamEck3YqpUIy9vdRoxhkKIO1SWkDHth/preview",
  },
  {
    slug: "holzkirchen",
    title: "Holzkirchen",
    year: 2016,
    genre: "Musicale",
    tagline: "Eppur si muove.",
    plot:
      "Tra canzoni improvvisate, incontri assurdi e fiumi di alcol, i ragazzi continuano il loro viaggio sempre più lontano da Monaco, senza sapere cosa li aspetta.",
    poster: "/holzkirchen_cover.png",
    background: "/backgrounds/blitzkrieg_bg.png",
    src: "https://drive.google.com/file/d/122LDc1fw3BrRwrzf1N2snzSPRBZ84O5k/preview",
    trailerSrc: "https://drive.google.com/file/d/1x_ll7oJL-FUSXTEZkPvCXBWohAqI4byl/preview",
  },
  {
    slug: "cyberpub",
    title: "Cyberpub",
    year: 2017,
    genre: "Fantascienza",
    tagline: "Un po' creepy, molto cyberpunk.",
    plot:
      "Oltre la Manica, un pub sospeso tra reale e digitale diventa il fulcro di complotti e alleanze inattese. Tra neon e ombre, il confine con il virtuale si fa sempre più labile.",
    poster: "/cyberpub_cover.png",
    background: "/backgrounds/cyberpub_bg.png",
    src: "https://drive.google.com/file/d/1VWMY9xLoYAh8mjulcKk-KRGHx4REao3u/preview",
    trailerSrc: "https://drive.google.com/file/d/1CWrANVkugQv63P88AB8pqsbnIMCU1p8b/preview",
  },
  {
    slug: "blitzkrieg",
    title: "Blitzkrieg",
    year: 2020,
    genre: "Giallo, Noir",
    tagline: "Il colpevole è in questo film.",
    plot:
      "Un’indagine tra due epoche diverse porta alla ricerca di un assassino che sfugge al tempo stesso. Misteri, indizi e verità distorte si intrecciano in un finale inaspettato.",
    poster: "/blitzkrieg_cover.png",
    background: "/backgrounds/blitzkrieg_bg.png",
    src: "https://drive.google.com/file/d/1NP1-6dcq6l0r1AKalpABurBTwuLBhulI/preview",
    trailerSrc: "https://drive.google.com/file/d/1ig_McWmNJiNZMY_HifydBKChhmCyTqcB/preview",
  },
];
