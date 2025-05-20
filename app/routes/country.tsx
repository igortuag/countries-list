import { Link, useParams } from "react-router";
import { CountryCard } from "~/components/CountryCard";

export default function Country() {
  const params = useParams();

  return (
    <main className="container mx-auto">
      <header className="mb-8">
        <h1 className="font-bold text-5xl text-center">Alemanha</h1>
      </header>

      <Link to="/" className="flex items-center gap-2 text-xl mb-4">
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.14395 0.673555C5.38301 0.90793 5.38301 1.29699 5.14863 1.53606L2.30332 4.39074H13.1455C13.4783 4.39074 13.7502 4.66262 13.7502 5.00012C13.7502 5.33762 13.4783 5.60949 13.1455 5.60949H2.30332L5.15332 8.46418C5.3877 8.70324 5.38301 9.08762 5.14863 9.32668C4.90957 9.56106 4.52988 9.56106 4.29082 9.32199L0.428321 5.43137C0.376758 5.37512 0.33457 5.31418 0.301758 5.23918C0.268945 5.16418 0.254883 5.08449 0.254883 5.00481C0.254883 4.84543 0.315821 4.69543 0.428321 4.57824L4.29082 0.687618C4.52051 0.443868 4.90488 0.43918 5.14395 0.673555Z"
            fill="black"
          />
        </svg>
        Voltar
      </Link>
      <section className="flex px-16 py-8 gap-8 justify-between bg-white rounded-3xl">
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

        <div className="flex gap-8">
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
