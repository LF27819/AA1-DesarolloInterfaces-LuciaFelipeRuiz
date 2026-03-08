import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";

export default function CocktailsPage() {
  const [cocktails, setCocktails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [alcoholFilter, setAlcoholFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const letras = "abcdefghijklmnopqrstuvwxyz".split("");

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

  const alcoholOptions = Array.from(
    new Set(cocktails.map((cocktail) => cocktail.strAlcoholic).filter(Boolean))
  ).sort();

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCocktails = cocktails.filter((cocktail) => {
    if (alcoholFilter !== "all" && cocktail.strAlcoholic !== alcoholFilter) {
      return false;
    }

    if (!normalizedQuery) return true;

    const searchableText = [
      cocktail.strDrink,
      cocktail.strCategory,
      cocktail.strAlcoholic,
      cocktail.strGlass,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  const sortedCocktails = [...filteredCocktails].sort((a, b) => {
    const comparison = a.strDrink.localeCompare(b.strDrink);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  if (loading) {
    return (
      <p style={{ margin: 0, fontSize: "30px", textAlign: "center" }}>
        ◌ Cargando cócteles...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ margin: 0, fontSize: "30px", textAlign: "center" }}>
        {error}
      </p>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
        Todos los cócteles 🍸
      </h1>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          justifyContent: "center",
          flexWrap: "wrap",

        }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nombre, categoría, tipo o vaso..."
          style={{
            flex: 1,
            minWidth: "260px",
            maxWidth: "420px",
            padding: "12px 14px",
            borderRadius: "10px",
            border: "2px solid var(--color-borde)",
            fontSize: "1rem",
          }}
        />

        <select
          value={alcoholFilter}
          onChange={(event) => setAlcoholFilter(event.target.value)}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "2px solid var(--color-borde)",
            fontSize: "1rem",
            minWidth: "180px",
          }}
        >
          <option value="all">Todos los tipos</option>
          {alcoholOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "2px solid var(--color-borde)",
            fontSize: "1rem",
            minWidth: "180px",
          }}
        >
          <option value="asc">Ascendente (A-Z)</option>
          <option value="desc">Descendente (Z-A)</option>
        </select>
      </div>

      <p style={{ marginBottom: "24px", textAlign: "center" }}>
        Resultados: {sortedCocktails.length}
      </p>

      {sortedCocktails.length === 0 ? (
        <p style={{ color: "var(--color-texto: #f7c691", fontSize: "1.5rem", textAlign: "center" }}>
          No encontramos cócteles con ese criterio de búsqueda.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
            padding: "0 20px",
          }}
        >
          {sortedCocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      )}
    </div>
  );
}