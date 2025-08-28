"use client";
import Link from "next/link";
import { ITEMS } from "./data/items";

export default function Page() {
  return (
    <main>
      <div className="container">
        <div className="logoWrap">
          <img src="/netflunk_logo.png" alt="Netflunk logo" className="logo" />
        </div>

        <section className="grid" aria-label="Catalogo">
          {ITEMS.map((v) => (
            <Link key={v.slug} href={`/film/${v.slug}`} className="card" aria-label={`Apri ${v.title}`}>
              <div className="thumb poster">
                <img src={v.poster} alt={`${v.title} — poster`} loading="lazy" />
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
