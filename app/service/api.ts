const BASE_URL = "https://restcountries.com/v3.1";

export interface CountryItem {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  cca2: string;
}

export interface CountryDetails extends CountryItem {
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  languages: {
    [key: string]: string;
  };
  borders: string[];
}

export const fetchCountryList = async (listCode?: string[]) => {
  const listCodeString = listCode ? listCode.join(",") : "";
  const codeParam = listCodeString ? `codes=${listCodeString}` : "";
  const fieldsParam = "fields=name,flags,cca2";

  const endpoint = codeParam ? `alpha?${fieldsParam}&${codeParam}` : `all?${fieldsParam}`;

  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const json = await response.json();

  return json as CountryItem[];
};

export const fetchCountry = async (cca2: string) => {
  const response = await fetch(`${BASE_URL}/alpha/${cca2}`);
  const json = await response.json();

  return json[0] as CountryDetails;
};
