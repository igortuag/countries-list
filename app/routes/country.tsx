import { useEffect, useState, useTransition } from "react";
import { Link, useParams } from "react-router";
import { ArrowIcon } from "~/components/Icons";
import { fetchCountry, type CountryDetails } from "~/service/api";

export default function Country() {
  const params = useParams();
  const cca2 = params.cca2;
  const [isLoading, setTransition] = useTransition();

  const [country, setCountry] = useState<CountryDetails | null>(null);

  async function getCountry() {
    if (!cca2) {
      return;
    }
    setTransition(async () => {
      const data = await fetchCountry(cca2);
      setCountry(data);
    });
  }

  useEffect(() => {
    getCountry();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!country) {
    return <p>Country not found</p>;
  }

  const languages = Object.values(country.languages);

  return (
    <main className="container mx-auto">
      <header className="mb-8">
        <h1 className="font-bold text-5xl text-center">
          {country.name.common}
        </h1>
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
              <span>{country.capital[0]}</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">🗺️ Continente:</span>
              <span>{country.region}</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">👨‍👩‍👧‍👦 População: </span>
              <span>{country.population}</span>
            </li>
            <li className="grid gap-1">
              <p className="font-bold"> 🗣️ Línguas faladas: </p>
              <div className="flex gap-2 mt-1">
                {languages.map((language) => (
                  <span
                    className="bg-indigo-700 text-white leading-none grid content-center px-2 py-1 rounded-full text-xs "
                    key={language}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-full max-w-[458px] block rounded-3xl h-auto"
        />
      </section>

      <section className="mt-16">
        <h2 className="font-bold mb-4 text-4xl">Países que fazem fronteira</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-8">
          {/* <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard /> */}
        </div>
      </section>
    </main>
  );
}
