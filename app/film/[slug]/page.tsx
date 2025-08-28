// app/film/[slug]/page.tsx
import { notFound } from "next/navigation";
import { ITEMS } from "../../data/items";
import WatchClient from "../WatchClient";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ITEMS.map((i) => ({ slug: i.slug }));
}

export default function FilmPage({ params }: Props) {
  const film = ITEMS.find((i) => i.slug === params.slug);
  if (!film) return notFound();

  const bg = film.background || film.poster || "/backgrounds/fallback.jpg";

  return (
    <main className="detailPage">
      {/* HERO: immagine intera, leggermente scura, blur verso il basso */}
      <div className="bgWrap" aria-hidden>
        <img className="bgImgFull" src={bg} alt="" />
        <div className="bgDarken" />
        <div className="bgBlurFade" />
      </div>

      <div className="container">
        <a href="/" className="backLink">← Torna al catalogo</a>

        <section className="detail">
          <div className="posterCol">
            <img
              src={film.poster}
              alt={`${film.title} — poster`}
              className="posterLarge"
            />
          </div>

          <div className="infoCol">
            <h1 className="filmTitle">{film.title}</h1>

            <div className="meta">
              <span>{film.year}</span> · <span>{film.genre}</span>
            </div>

            {film.tagline && <p className="tagline">“{film.tagline}”</p>}

            <p className="plot">{film.plot}</p>

            <div className="btnRow">
              <WatchClient title={film.title} src={film.src} label="Avvia" variant="solid" />
              <WatchClient title={`${film.title} — Trailer`} src={film.trailerSrc} label="Trailer" variant="outline" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}