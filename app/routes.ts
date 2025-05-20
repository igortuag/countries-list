import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/country-list.tsx"),
  route("/country/:code", "./routes/country.tsx")
] satisfies RouteConfig;
