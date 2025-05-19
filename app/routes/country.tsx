import { useParams } from "react-router";

export default function Country() {
  const params = useParams()

  return <div>{JSON.stringify(params)}</div>;
}
