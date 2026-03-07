import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";

export default function CocktailsPage() {

  const [cocktails, setCocktails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    Promise.all(
      letras.map((letra) =>
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`)
          .then((response) => response.json())
      )
    )
      .then((results) => {

        const allCocktails = results.flatMap((result) => result.drinks || []);

        setCocktails(allCocktails);
        setLoading(false);

      })
      .catch(() => {
        setError("Error cargando cócteles");
        setLoading(false);
      });

  }, []);

  if (loading) return <p style={{ margin: 0, fontSize: "30px", textAlign: "center"  }}> ◌ Cargando cócteles...</p>;
  if (error) return <p style={{ margin: 0, fontSize: "30px", textAlign: "center"  }}>{error}</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px"
      }}
    >
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}