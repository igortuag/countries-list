import { CountryCard } from "~/components/CountryCard";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

type CountryItem = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      ara: {
        official: string;
        common: string;
      };
      eng: {
        official: string;
        common: string;
      };
      tir: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export default function Home() {
  const [list, setList] = useState([]);

  async function fetchCountryList() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
    );
    const json = await response.json();

    console.log("json ::>", json);

    setList(json);
  }

  useEffect(() => {
    fetchCountryList();
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
