import { CountryCard } from "~/components/CountryCard";
import { useEffect, useState } from "react";
import type { Route } from "../+types/root";
import { fetchCountryList, type CountryItem } from "~/service/api";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lista de Paises" },
    { name: "description", content: "Lista de todos países" }
  ];
}

export default function Home() {
  const [list, setList] = useState<CountryItem[]>([]);

  async function getCountryList() {
    const data = await fetchCountryList();

    setList(data);
  }

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <div className="container mx-auto grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {list.map((country: CountryItem) => (
        <CountryCard
          key={country.cca2}
          name={country.name.common}
          flag={country.flags.png}
          code={country.cca2}
        />
      ))}
    </div>
  );
}
