import { useParams } from "react-router-dom";

export default function CocktailDetailPage() {
  const { id } = useParams();

  return (
    <h2>Detalle cocktail: {id}
    </h2>
  );
}