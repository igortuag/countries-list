import { Link, useParams } from "react-router";
import { CountryCard } from "~/components/CountryCard";
import { ArrowIcon } from "~/components/Icons";

export default function Country() {
  const params = useParams();

  return (
    <main className="container mx-auto">
      <header className="mb-8">
        <h1 className="font-bold text-5xl text-center">Alemanha</h1>
      </header>

      <Link to="/" className="flex items-center gap-2 text-xl mb-4">
        <ArrowIcon />
        Voltar
      </Link>
      <section className="flex flex-wrap px-16 py-8 gap-8 justify-between bg-white rounded-3xl">
        <div>
          <ul className="text-2xl grid gap-4">
            <li className="flex gap-1">
              <span className="font-bold">🏙️ Capital:</span>
              <span>Berlim</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">🗺️ Continente:</span>
              <span>Europe</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">👨‍👩‍👧‍👦 População: </span>
              <span>83.2M</span>
            </li>
            <li className="grid gap-1">
              <p className="font-bold"> 🗣️ Línguas faladas: </p>
              <div className="flex gap-2 mt-1">
                <span className="bg-indigo-700 text-white leading-none grid content-center px-2 py-1 rounded-full text-xs ">
                  German
                </span>
                <span className="bg-indigo-700 text-white leading-none grid content-center px-2 py-1 rounded-full text-xs ">
                  German
                </span>
              </div>
            </li>
          </ul>
        </div>

        <img
          src="https://flagcdn.com/w320/de.png"
          alt="Bandeira da Alemanha"
          className="w-full max-w-[458px] block rounded-3xl h-auto"
        />
      </section>

      <section className="mt-16">
        <h2 className="font-bold mb-4 text-4xl">Países que fazem fronteira</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-8">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </section>
    </main>
  );
}
