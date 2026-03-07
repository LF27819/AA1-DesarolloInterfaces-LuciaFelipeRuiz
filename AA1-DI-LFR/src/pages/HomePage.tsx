import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";

export default function HomePage() {

  const [cocktail, setCocktail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Error cargando el cóctel");
        setLoading(false);
      });

  }, []);

  if (loading) return <p style={{ margin: 0, fontSize: "30px", textAlign: "center"  }}> ◌ Cargando cóctel...</p>;

  if (error) return <p style={{ margin: 0, fontSize: "30px", textAlign: "center"  }}>{error}</p>;

  return (
    <div>
      <CocktailCard cocktail={cocktail} />
    </div>
  );
}