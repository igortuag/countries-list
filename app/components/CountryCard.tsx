import { Link } from "react-router";

type CountryCardProps = {
  name: string;
  flag: string;
  code: string;
};

export const CountryCard = ({ name, flag, code }: CountryCardProps) => {
  return (
    <Link
      to={`/country/${code}`}
      title={name}
      className="p-3 bg-white rounded-2xl block w-full"
    >
      <img
        className="block w-full aspect-2/1 object-cover rounded-2xl"
        src={flag}
        alt={`Bandeira do ${name}`}
      />
      <h3 className="text-2xl font-bold py-4 text-center h-12 whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h3>
    </Link>
  );
};
