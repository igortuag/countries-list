import { Link } from "react-router";

export const CountryCard = () => {
  return (
    <Link to="/country/germany" className="p-3 bg-white rounded-2xl block w-full">
      <img
        className="block w-full object-contain rounded-2xl"
        src="https://flagcdn.com/w320/de.png"
      />
      <h3 className="text-2xl font-bold py-4 text-center">Alemanha</h3>
    </Link>
  );
};
