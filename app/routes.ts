import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/country-list.tsx"),
  route("/country/:cca2", "./routes/country.tsx")
] satisfies RouteConfig;
